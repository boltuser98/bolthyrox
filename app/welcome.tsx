import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import i18n from '../i18n';
import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing
} from 'react-native-reanimated';

export default function WelcomeAuthScreen() {
  const router = useRouter();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1500, easing: Easing.ease }),
        withTiming(0.6, { duration: 1500, easing: Easing.ease })
      ),
      -1,
      true
    );

    scale.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1500, easing: Easing.ease }),
        withTiming(0.95, { duration: 1500, easing: Easing.ease })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={[styles.logoContainer, animatedStyle]}>
          <Image
            source={require('../assets/images/logo3.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.primaryButtonText}>{i18n.t('welcome.login')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/register/profile-setup')}
          >
            <Text style={styles.secondaryButtonText}>{i18n.t('welcome.register')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Mit der Registrierung und Anmeldung stimmst du unseren{' '}
            <TouchableOpacity onPress={() => router.push('/terms')} style={styles.inlineLink}>
              <Text style={styles.linkText}>{i18n.t('welcome.terms')}</Text>
            </TouchableOpacity>
            {' '}und{' '}
            <TouchableOpacity onPress={() => router.push('/cookies')} style={styles.inlineLink}>
              <Text style={styles.linkText}>{i18n.t('welcome.cookies')}</Text>
            </TouchableOpacity>
            {' '}zu.
          </Text>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    marginBottom: 80,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.accent,
  },
  secondaryButtonText: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  termsText: {
    color: Colors.text,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  inlineLink: {
    display: 'inline',
  },
  linkText: {
    color: Colors.link,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
