import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import image from '../../../assets/fundo.png';

const MENU_ITEMS = [
  {
    id: 'linhas',
    title: 'Linhas e pontos',
    description: 'Veja pontos proximos e linhas disponiveis.',
    route: 'LinhasPontos',
    badge: 'LP',
  },
  {
    id: 'rotas',
    title: 'Rotas',
    description: 'Escolha entre as linhas azul, roxa, amarela e laranja.',
    route: 'Rotas',
    badge: 'RT',
    featured: true,
  },
  {
    id: 'horarios',
    title: 'Horarios',
    description: 'Consulte a previsao e organize sua viagem.',
    route: 'Horarios',
    badge: 'HR',
  },
];

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={image} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <SafeAreaView style={styles.screen}>
          <View style={styles.header}>
            <View>
              <Text style={styles.brand}>BUSLY</Text>
              <Text style={styles.subtitle}>Transporte publico na palma da mao</Text>
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.hero}>
            <Text style={styles.heroTitle}>Para onde voce quer ir?</Text>
            <Text style={styles.heroText}>
              Acesse rotas, horarios e pontos de forma simples para planejar sua viagem.
            </Text>
          </View>

          <View style={styles.panel}>
            <Text style={styles.panelTitle}>Acesso rapido</Text>

            {MENU_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.menuCard, item.featured && styles.menuCardFeatured]}
                activeOpacity={0.88}
                onPress={() => navigation.navigate(item.route)}
              >
                <View
                  style={[
                    styles.menuBadge,
                    item.featured && styles.menuBadgeFeatured,
                  ]}
                >
                  <Text
                    style={[
                      styles.menuBadgeText,
                      item.featured && styles.menuBadgeTextFeatured,
                    ]}
                  >
                    {item.badge}
                  </Text>
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
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
