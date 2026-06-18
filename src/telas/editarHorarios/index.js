import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { listarRotas } from '../../services/rotas';
import {
  atualizarHorario,
  criarHorario,
  excluirHorario,
  listarHorariosDoPonto,
  listarPontosDaRota,
} from '../../services/horariosAdmin';

const DEFAULT_ROUTE_COLOR = '#2563EB';

function getRouteId(route) {
  return route?.id_rota || route?.id || route?.idRota;
}

function getRouteName(route) {
  return (
    route?.nome_rota ||
    route?.nome_linhas ||
    route?.nome_linha ||
    route?.nome ||
    `Rota ${getRouteId(route) || ''}`.trim()
  );
}

function getRouteColor(route) {
  return route?.cor || route?.cor_rota || route?.corRota || DEFAULT_ROUTE_COLOR;
}

function getPointId(point) {
  return point?.id_ponto || point?.id_pontos || point?.id;
}

function getPointName(point) {
  return point?.nome_ponto || point?.nome_pontos || point?.nome || 'Ponto';
}

function formatTime(time) {
  return time ? String(time).slice(0, 5) : '';
}

function normalizeSchedules(schedules) {
  return schedules.map((schedule) => ({
    id_horario: schedule.id_horario || schedule.id,
    hora: formatTime(schedule.hora || schedule.passagem_horarios),
    isNew: false,
  }));
}

function isValidTime(time) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(String(time || '').trim());
}

export default function EditarHorarios() {
  const navigation = useNavigation();
  const route = useRoute();
  const usuario = route.params?.usuario;
  const token = route.params?.token;
  const isAdmin = Boolean(token) && Number(usuario?.id_tipo_usuario) === 1;

  const [routes, setRoutes] = useState([]);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [points, setPoints] = useState([]);
  const [loadingRoutes, setLoadingRoutes] = useState(true);
  const [loadingPoints, setLoadingPoints] = useState(false);
  const [savingPointId, setSavingPointId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAdmin) {
      Alert.alert(
        'Acesso negado',
        'Essa tela é exclusiva para administradores autenticados.',
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [isAdmin, navigation]);

  useEffect(() => {
    if (isAdmin) {
      loadRoutes();
    }
  }, [isAdmin]);

  useEffect(() => {
    if (isAdmin && selectedRouteId) {
      loadRoutePoints(selectedRouteId);
    }
  }, [isAdmin, selectedRouteId]);

  async function loadRoutes() {
    try {
      setLoadingRoutes(true);
      setError('');

      const loadedRoutes = await listarRotas();
      setRoutes(loadedRoutes);
      setSelectedRouteId((currentId) => currentId || getRouteId(loadedRoutes[0]) || null);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoadingRoutes(false);
    }
  }

  async function loadRoutePoints(routeId) {
    try {
      setLoadingPoints(true);
      setError('');
      setPoints([]);

      const loadedPoints = await listarPontosDaRota(routeId);
      const pointsWithSchedules = await Promise.all(
        loadedPoints.map(async (point) => {
          const pointId = getPointId(point);
          const schedules = await listarHorariosDoPonto(pointId);

          return {
            ...point,
            id_ponto: pointId,
            nome_ponto: getPointName(point),
            horarios: normalizeSchedules(schedules),
          };
        }),
      );

      setPoints(pointsWithSchedules);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoadingPoints(false);
    }
  }

  function goBack() {
    navigation.navigate('HomeAdmin', { usuario, token });
  }

  function selectRoute(routeId) {
    setSelectedRouteId(routeId);
  }

  function updateSchedule(pointId, index, value) {
    setPoints((currentPoints) =>
      currentPoints.map((point) => {
        if (Number(point.id_ponto) !== Number(pointId)) {
          return point;
        }

        const horarios = point.horarios.map((schedule, scheduleIndex) =>
          scheduleIndex === index
            ? { ...schedule, hora: value.replace(/[^\d:]/g, '').slice(0, 5) }
            : schedule,
        );

        return { ...point, horarios };
      }),
    );
  }

  function addSchedule(pointId) {
    setPoints((currentPoints) =>
      currentPoints.map((point) => {
        if (Number(point.id_ponto) !== Number(pointId)) {
          return point;
        }

        return {
          ...point,
          horarios: [
            ...point.horarios,
            {
              tempId: `novo-${Date.now()}`,
              hora: '',
              isNew: true,
            },
          ],
        };
      }),
    );
  }

  function removeUnsavedSchedule(pointId, index) {
    setPoints((currentPoints) =>
      currentPoints.map((point) => {
        if (Number(point.id_ponto) !== Number(pointId)) {
          return point;
        }

        return {
          ...point,
          horarios: point.horarios.filter((_, scheduleIndex) => scheduleIndex !== index),
        };
      }),
    );
  }

  function confirmDeleteSchedule(point, schedule, index) {
    if (!schedule.id_horario) {
      removeUnsavedSchedule(point.id_ponto, index);
      return;
    }

    Alert.alert(
      'Excluir horário',
      'Deseja excluir este horário?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => deleteSchedule(point, schedule),
        },
      ],
    );
  }

  async function reloadPointSchedules(pointId) {
    const schedules = await listarHorariosDoPonto(pointId);

    setPoints((currentPoints) =>
      currentPoints.map((point) =>
        Number(point.id_ponto) === Number(pointId)
          ? { ...point, horarios: normalizeSchedules(schedules) }
          : point,
      ),
    );
  }

  async function deleteSchedule(point, schedule) {
    try {
      setSavingPointId(point.id_ponto);
      await excluirHorario({ token, idHorario: schedule.id_horario });
      await reloadPointSchedules(point.id_ponto);
      Alert.alert('Sucesso', 'Horário excluído com sucesso.');
    } catch (deleteError) {
      Alert.alert('Erro ao excluir', deleteError.message);
    } finally {
      setSavingPointId(null);
    }
  }

  async function savePointSchedules(point) {
    const schedulesToSave = point.horarios.filter((schedule) => schedule.hora.trim());
    const invalidSchedule = schedulesToSave.find((schedule) => !isValidTime(schedule.hora));

    if (invalidSchedule) {
      Alert.alert('Horário inválido', 'Informe horários no formato HH:MM.');
      return;
    }

    try {
      setSavingPointId(point.id_ponto);

      for (const schedule of schedulesToSave) {
        if (schedule.id_horario) {
          await atualizarHorario({
            token,
            idHorario: schedule.id_horario,
            idPonto: point.id_ponto,
            hora: schedule.hora,
          });
        } else {
          await criarHorario({
            token,
            idPonto: point.id_ponto,
            hora: schedule.hora,
          });
        }
      }

      await reloadPointSchedules(point.id_ponto);
      Alert.alert('Sucesso', 'Horários salvos com sucesso.');
    } catch (saveError) {
      Alert.alert('Erro ao salvar', saveError.message);
    } finally {
      setSavingPointId(null);
    }
  }

  const selectedRoute = useMemo(
    () =>
      routes.find((routeItem) => Number(getRouteId(routeItem)) === Number(selectedRouteId)),
    [routes, selectedRouteId],
  );
  const selectedColor = getRouteColor(selectedRoute);

  if (!isAdmin) {
    return (
      <LinearGradient colors={['#1E40AF', '#06142E']} style={styles.screen} />
    );
  }

  return (
    <LinearGradient
      colors={['#0F172A', '#1E40AF', '#06142E']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.screen}
    >
      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          colors={['#1D4ED8', '#1E3A8A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Editar horários</Text>

          <TouchableOpacity
            activeOpacity={0.84}
            style={styles.backButton}
            onPress={goBack}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </LinearGradient>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Editar horários</Text>
            <Text style={styles.cardDescription}>
              Selecione uma rota para ver os pontos e editar os horários.
            </Text>

            <View style={styles.routesArea}>
              {loadingRoutes ? (
                <ActivityIndicator color="#FFFFFF" size="large" />
              ) : routes.length ? (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.routeList}
                >
                  {routes.map((routeItem) => {
                    const routeId = getRouteId(routeItem);
                    const active = Number(routeId) === Number(selectedRouteId);
                    const color = getRouteColor(routeItem);

                    return (
                      <TouchableOpacity
                        key={routeId}
                        activeOpacity={0.86}
                        onPress={() => selectRoute(routeId)}
                        style={[
                          styles.routeButton,
                          { backgroundColor: active ? color : '#6B7280' },
                          active && styles.routeButtonActive,
                        ]}
                      >
                        <Text style={styles.routeButtonText} numberOfLines={1}>
                          {getRouteName(routeItem)}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              ) : (
                <Text style={styles.emptyText}>Nenhuma rota cadastrada.</Text>
              )}
            </View>

            {error ? (
              <TouchableOpacity
                style={styles.errorCard}
                activeOpacity={0.85}
                onPress={() =>
                  selectedRouteId ? loadRoutePoints(selectedRouteId) : loadRoutes()
                }
              >
                <Text style={styles.errorTitle}>Não foi possível carregar</Text>
                <Text style={styles.errorText}>{error}</Text>
                <Text style={styles.errorAction}>Toque para tentar novamente</Text>
              </TouchableOpacity>
            ) : null}

            {loadingPoints ? (
              <View style={styles.feedbackCard}>
                <ActivityIndicator color="#FFFFFF" size="large" />
                <Text style={styles.feedbackText}>Carregando pontos e horários...</Text>
              </View>
            ) : points.length ? (
              <View style={styles.pointsList}>
                {points.map((point) => {
                  const saving = Number(savingPointId) === Number(point.id_ponto);

                  return (
                    <View key={point.id_ponto} style={styles.pointCard}>
                      <View style={styles.pointHeader}>
                        <View style={styles.pointInfo}>
                          <Text style={styles.pointName}>{point.nome_ponto}</Text>
                          <Text style={styles.pointMeta}>
                            {point.horarios.length}{' '}
                            {point.horarios.length === 1 ? 'horário' : 'horários'}
                          </Text>
                        </View>

                        <TouchableOpacity
                          activeOpacity={0.84}
                          style={[styles.addButton, { backgroundColor: selectedColor }]}
                          onPress={() => addSchedule(point.id_ponto)}
                          disabled={saving}
                        >
                          <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.scheduleList}>
                        {point.horarios.length ? (
                          point.horarios.map((schedule, index) => (
                            <View
                              key={schedule.id_horario || schedule.tempId || index}
                              style={styles.scheduleRow}
                            >
                              <TextInput
                                style={styles.timeInput}
                                value={schedule.hora}
                                onChangeText={(value) =>
                                  updateSchedule(point.id_ponto, index, value)
                                }
                                placeholder="HH:MM"
                                placeholderTextColor="rgba(255, 255, 255, 0.55)"
                                keyboardType="numbers-and-punctuation"
                                maxLength={5}
                                editable={!saving}
                              />

                              <TouchableOpacity
                                activeOpacity={0.84}
                                style={styles.deleteButton}
                                onPress={() => confirmDeleteSchedule(point, schedule, index)}
                                disabled={saving}
                              >
                                <Text style={styles.deleteButtonText}>X</Text>
                              </TouchableOpacity>
                            </View>
                          ))
                        ) : (
                          <Text style={styles.emptyPointText}>
                            Nenhum horário cadastrado para este ponto.
                          </Text>
                        )}
                      </View>

                      <TouchableOpacity
                        activeOpacity={0.86}
                        style={[styles.saveButton, saving && styles.disabledButton]}
                        onPress={() => savePointSchedules(point)}
                        disabled={saving}
                      >
                        <Text style={styles.saveButtonText}>
                          {saving ? 'Salvando...' : 'Salvar horários'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View style={styles.feedbackCard}>
                <Text style={styles.emptyText}>
                  Nenhum ponto cadastrado para esta rota.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
