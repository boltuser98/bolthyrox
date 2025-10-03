import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { Check, Crown, Zap, Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PREMIUM_PACKAGES = [
  {
    id: 'basis',
    name: 'Basis',
    price: 'Kostenlos',
    period: '',
    color: '#888888',
    gradient: ['#888888', '#666666'],
    icon: Star,
    features: [
      '20 Matches pro Tag',
      'Nur Wohnort gebunden',
      'Community Partner finden',
      'Mit Werbung',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze',
    price: '9,99€',
    period: '/Monat',
    color: '#CD7F32',
    gradient: ['#CD7F32', '#8B5A2B'],
    icon: Star,
    features: [
      '25 Matches pro Tag',
      'Standort änderbar (Community)',
      'Weniger Werbung',
      'Merchandise bis 15€',
    ],
  },
  {
    id: 'silver',
    name: 'Silber',
    price: '19,99€',
    period: '/Monat',
    color: '#C0C0C0',
    gradient: ['#E8E8E8', '#A8A8A8'],
    icon: Zap,
    popular: true,
    features: [
      '50 Matches pro Tag',
      'Standort änderbar',
      'Likes sichtbar',
      '5% Hyrox Rabatt',
      'Merchandise bis 20€',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '29,99€',
    period: '/Monat',
    color: '#FFD700',
    gradient: ['#FFD700', '#FFA500'],
    icon: Crown,
    features: [
      'Unbegrenzte Matches',
      'Immer chatten',
      'Community Nachrichten immer',
      '10% Hyrox Rabatt',
      'Merchandise bis 50€',
    ],
  },
];

export default function PremiumScreen() {
  const router = useRouter();

  const handlePurchase = (packageId: string) => {
    router.push(`/premium-details/${packageId}`);
  };

  const handleSkip = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image
            source={require('../assets/images/logo3.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Wähle dein Premium Paket</Text>
          <Text style={styles.subtitle}>
            Erweitere deine Hyrox-Experience auf das nächste Level
          </Text>
        </View>

        <View style={styles.packagesContainer}>
          {PREMIUM_PACKAGES.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <View
                key={pkg.id}
                style={[
                  styles.packageCard,
                  pkg.popular && styles.popularCard,
                ]}
              >
                {pkg.popular && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularText}>BELIEBTESTE WAHL</Text>
                  </View>
                )}

                <LinearGradient
                  colors={pkg.gradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.packageHeader}
                >
                  <View style={styles.iconContainer}>
                    <IconComponent color={Colors.background} size={24} />
                  </View>
                  <Text style={styles.packageName}>{pkg.name}</Text>
                </LinearGradient>

                <View style={styles.packageBody}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>{pkg.price}</Text>
                    <Text style={styles.period}>{pkg.period}</Text>
                  </View>

                  <View style={styles.featuresContainer}>
                    {pkg.features.map((feature, idx) => (
                      <View key={idx} style={styles.featureRow}>
                        <View style={[styles.checkIcon, { backgroundColor: pkg.color }]}>
                          <Check color={Colors.background} size={12} strokeWidth={2.5} />
                        </View>
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity
                    style={[styles.selectButton, { backgroundColor: pkg.color }]}
                    onPress={() => handlePurchase(pkg.id)}
                  >
                    <Text style={styles.selectButtonText}>Jetzt auswählen</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>

        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Überspringen</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Alle Preise verstehen sich inklusive MwSt. Jederzeit kündbar.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  title: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  packagesContainer: {
    paddingHorizontal: 20,
    gap: 14,
  },
  packageCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#2a2a2a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  popularCard: {
    borderColor: Colors.accent,
    borderWidth: 2.5,
    transform: [{ scale: 1.0 }],
  },
  popularBadge: {
    backgroundColor: Colors.accent,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  popularText: {
    color: Colors.background,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  packageHeader: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 32,
    padding: 8,
    marginBottom: 8,
  },
  packageName: {
    color: Colors.background,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  packageBody: {
    padding: 16,
  },
  priceContainer: {
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  price: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: 'bold',
  },
  period: {
    color: Colors.gray,
    fontSize: 12,
    marginTop: 2,
  },
  featuresContainer: {
    gap: 8,
    marginBottom: 16,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    color: Colors.text,
    fontSize: 13,
    flex: 1,
    lineHeight: 18,
  },
  selectButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  selectButtonText: {
    color: Colors.background,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  skipButton: {
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
  },
  skipButtonText: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
  footerText: {
    color: Colors.gray,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
});
