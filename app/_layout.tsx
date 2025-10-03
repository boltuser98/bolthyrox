import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { WebLayoutWrapper } from '@/components/WebLayoutWrapper';

if (Platform.OS === 'web') {
  require('../global.css');
}

export default function RootLayout() {
  useFrameworkReady();

  return (
    <WebLayoutWrapper>
      <LanguageProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="premium" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register/phone" />
          <Stack.Screen name="register/questions" />
          <Stack.Screen name="register/personal-info" />
          <Stack.Screen name="register/profile-setup" />
          <Stack.Screen name="register/photos" />
          <Stack.Screen name="register/competitions" />
          <Stack.Screen name="register/interests" />
          <Stack.Screen name="register/looking-for" />
          <Stack.Screen name="register/verification" />
          <Stack.Screen name="terms" />
          <Stack.Screen name="cookies" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="light" />
      </LanguageProvider>
    </WebLayoutWrapper>
  );
}
