import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const MENU_ITEMS = [
  {
    id: 'rotas',
    title: 'Rotas',
    description: 'Linhas azul, roxa, amarela e laranja.',
    route: 'Rotas',
    featured: true,
    icon: 'route',
  },
  {
    id: 'horarios',
    title: 'Horarios',
    description: 'Previsoes e planejamento de viagem.',
    route: 'Horarios',
    icon: 'clock',
  },
];

const ACCESS_ITEMS = [
  {
    id: 'admin',
    title: 'Administrador',
    description: 'Login ADM',
    type: 'admin',
    icon: 'shield',
  },
  {
    id: 'motorista',
    title: 'Motorista',
    description: 'Login Motorista',
    type: 'motorista',
    icon: 'wheel',
  },
];

function HomeIcon({ name, featured }) {
  const toneStyle = featured ? styles.iconLight : styles.iconBlue;

  if (name === 'route') {
    return (
      <View style={styles.routeIcon}>
        <View style={[styles.routeDot, toneStyle]} />
        <View style={[styles.routeLine, toneStyle]} />
        <View style={[styles.routeDot, styles.routeDotEnd, toneStyle]} />
      </View>
    );
  }

  if (name === 'clock') {
    return (
      <View style={[styles.clockIcon, featured ? styles.clockIconLight : styles.clockIconBlue]}>
        <View style={[styles.clockHour, toneStyle]} />
        <View style={[styles.clockMinute, toneStyle]} />
      </View>
    );
  }

  if (name === 'bus') {
    return (
      <View style={styles.busIcon}>
        <View style={styles.busWindowRow}>
          <View style={styles.busWindow} />
          <View style={styles.busWindow} />
          <View style={styles.busWindow} />
        </View>
        <View style={styles.busFrontLine} />
        <View style={styles.busWheelRow}>
          <View style={styles.busWheel} />
          <View style={styles.busWheel} />
        </View>
      </View>
    );
  }

  if (name === 'shield') {
    return (
      <View style={styles.shieldIcon}>
        <View style={styles.shieldTop} />
        <View style={styles.shieldBottom} />
      </View>
    );
  }

  return (
    <View style={styles.wheelIcon}>
      <View style={styles.wheelCenter} />
      <View style={styles.wheelSpokeLeft} />
      <View style={styles.wheelSpokeRight} />
    </View>
  );
}

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.phone}>
          <SafeAreaView edges={['top']} style={styles.hero}>
            <View style={styles.circleLarge} />
            <View style={styles.circleMedium} />
            <View style={styles.circleSmall} />

            <View style={styles.header}>
              <View style={styles.logoMark}>
                <View style={styles.logoIcon}>
                  <HomeIcon name="bus" />
                </View>
                <Text style={styles.brand}>BUSLY</Text>
              </View>
            </View>

            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>Transporte publico</Text>
              <Text style={styles.heroTitle}>
                Para onde{'\n'}voce quer <Text style={styles.heroTitleAccent}>ir?</Text>
              </Text>
              <Text style={styles.heroText}>Consulte rotas e horarios em tempo real.</Text>
            </View>
          </SafeAreaView>

          <View style={styles.body}>
            <View style={styles.mainCards}>
              {MENU_ITEMS.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.menuCard, item.featured && styles.menuCardFeatured]}
                  activeOpacity={0.88}
                  onPress={() => navigation.navigate(item.route)}
                >
                  {item.featured && <View style={styles.dotAccent} />}

                  <View
                    style={[
                      styles.menuBadge,
                      item.featured && styles.menuBadgeFeatured,
                    ]}
                  >
                    <HomeIcon name={item.icon} featured={item.featured} />
                  </View>

                  <View style={styles.menuTextGroup}>
                    <Text
                      style={[
                        styles.menuTitle,
                        item.featured && styles.menuTitleFeatured,
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        styles.menuDescription,
                        item.featured && styles.menuDescriptionFeatured,
                      ]}
                    >
                      {item.description}
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.menuArrow,
                      item.featured && styles.menuArrowFeatured,
                    ]}
                  >
                    {'>'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Acesso restrito</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.accessList}>
              {ACCESS_ITEMS.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.accessCard}
                  activeOpacity={0.88}
                  onPress={() => navigation.navigate('Login', { loginType: item.type })}
                >
                  <View
                    style={[
                      styles.accessBadge,
                      item.type === 'admin' ? styles.accessBadgeAdmin : styles.accessBadgeDriver,
                    ]}
                  >
                    <HomeIcon name={item.icon} />
                  </View>

                  <View style={styles.accessTextGroup}>
                    <Text style={styles.accessTitle}>{item.title}</Text>
                    <Text style={styles.accessDescription}>{item.description}</Text>
                  </View>

                  <Text style={styles.accessArrow}>{'>'}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
