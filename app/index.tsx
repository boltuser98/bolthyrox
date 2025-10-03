import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { Crown, Zap, Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PREMIUM_PACKAGES = [
  {
    id: 'basis',
    name: 'Basis',
    price: 'Kostenlos',
    period: '',
    gradient: ['#888888', '#666666'],
    icon: Star,
  },
  {
    id: 'bronze',
    name: 'Bronze',
    price: '9,99€',
    period: '/Monat',
    gradient: ['#CD7F32', '#8B5A2B'],
    icon: Star,
  },
  {
    id: 'silver',
    name: 'Silber',
    price: '19,99€',
    period: '/Monat',
    gradient: ['#E8E8E8', '#A8A8A8'],
    icon: Zap,
    popular: true,
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '29,99€',
    period: '/Monat',
    gradient: ['#FFD700', '#FFA500'],
    icon: Crown,
  },
];

export default function WelcomeScreen() {
  const router = useRouter();

  const handlePurchase = (packageId: string) => {
    router.push(`/premium-details/${packageId}`);
  };

  const handleSkip = () => {
    router.push('/welcome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/logo3.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Wähle dein Premium Paket</Text>
          <Text style={styles.subtitle}>Erweitere deine Hyrox-Experience</Text>
        </View>

        <View style={styles.packagesContainer}>
          {PREMIUM_PACKAGES.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <TouchableOpacity
                key={pkg.id}
                style={styles.packageButton}
                onPress={() => handlePurchase(pkg.id)}
                activeOpacity={0.85}
              >
                <LinearGradient
                  colors={pkg.gradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.gradientButton}
                >
                  {pkg.popular && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularText}>BELIEBT</Text>
                    </View>
                  )}
                  <View style={styles.buttonContent}>
                    <View style={styles.iconCircle}>
                      <IconComponent color={Colors.background} size={22} strokeWidth={2.5} />
                    </View>
                    <View style={styles.textContent}>
                      <Text style={styles.packageName}>{pkg.name}</Text>
                      <View style={styles.priceRow}>
                        <Text style={styles.price}>{pkg.price}</Text>
                        <Text style={styles.period}>{pkg.period}</Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Überspringen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  title: {
    color: Colors.text,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 15,
    textAlign: 'center',
  },
  packagesContainer: {
    gap: 14,
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
  packageButton: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  gradientButton: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    position: 'relative',
  },
  popularBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: Colors.accent,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  popularText: {
    color: Colors.background,
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconCircle: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 28,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
  },
  packageName: {
    color: Colors.background,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  price: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  period: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 13,
    fontWeight: '600',
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 20,
  },
  skipButtonText: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: '600',
  },
});