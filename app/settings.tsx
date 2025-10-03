import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors } from '../constants/Colors';
import {
  Mail,
  Lock,
  Camera,
  MessageSquare,
  Headphones,
  Crown,
  Globe,
  ChevronRight,
} from 'lucide-react-native';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const { changeLanguage } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const radiusOptions = [5, 10, 20, 50, 100, 500];
  const [radiusIndex, setRadiusIndex] = useState(3);
  const radiusKm = radiusOptions[radiusIndex];

  const handleRadiusChange = (value: number) => {
    setRadiusIndex(Math.round(value));
  };

  const handleLanguageChange = (locale: string) => {
    changeLanguage(locale);
    setShowLanguageModal(false);
  };

  const settingsItems = [
    {
      icon: Mail,
      title: 'E-Mail ändern',
      subtitle: 'user@example.com',
      onPress: () => console.log('Change email'),
    },
    {
      icon: Lock,
      title: 'Passwort ändern',
      subtitle: '••••••••',
      onPress: () => console.log('Change password'),
    },
    {
      icon: Camera,
      title: 'Profilbild ändern',
      subtitle: 'Foto aktualisieren',
      onPress: () => console.log('Change profile picture'),
    },
    {
      icon: Globe,
      title: 'Sprache',
      subtitle: 'Deutsch',
      onPress: () => setShowLanguageModal(true),
    },
    {
      icon: Crown,
      title: 'Hyrox Pro',
      subtitle: 'Premium Mitgliedschaft kaufen',
      onPress: () => console.log('Buy premium'),
      highlight: true,
    },
    {
      icon: MessageSquare,
      title: 'Feedback geben',
      subtitle: 'Teile uns deine Meinung mit',
      onPress: () => console.log('Give feedback'),
    },
    {
      icon: Headphones,
      title: 'Support kontaktieren',
      subtitle: 'Wir helfen dir weiter',
      onPress: () => console.log('Contact support'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Einstellungen</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Account Einstellungen</Text>

          <View style={styles.radiusContainer}>
            <View style={styles.radiusHeaderFull}>
              <Text style={styles.radiusTitle}>Umkreis-Suche ändern</Text>
              <Text style={styles.radiusValue}>{radiusKm} km</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={radiusOptions.length - 1}
              step={1}
              value={radiusIndex}
              onValueChange={handleRadiusChange}
              minimumTrackTintColor={Colors.accent}
              maximumTrackTintColor="#2a2a2a"
              thumbTintColor={Colors.accent}
            />
            <View style={styles.radiusLabels}>
              {radiusOptions.map((km, index) => (
                <Text key={index} style={[styles.radiusLabel, radiusIndex === index && styles.radiusLabelActive]}>
                  {km}
                </Text>
              ))}
            </View>
          </View>

          {settingsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.settingItem, item.highlight && styles.settingItemHighlight]}
                onPress={item.onPress}
              >
                <View style={[styles.iconContainer, item.highlight && styles.iconContainerHighlight]}>
                  <IconComponent color={item.highlight ? Colors.accent : Colors.text} size={24} />
                </View>
                <View style={styles.settingTextContainer}>
                  <Text style={[styles.settingTitle, item.highlight && styles.settingTitleHighlight]}>
                    {item.title}
                  </Text>
                  <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                </View>
                <ChevronRight color={Colors.gray} size={20} />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.dangerZone}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Abmelden</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteText}>Account löschen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={showLanguageModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sprache wählen</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleLanguageChange('de')}
            >
              <Text style={styles.modalButtonText}>Deutsch</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleLanguageChange('en')}
            >
              <Text style={styles.modalButtonText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setShowLanguageModal(false)}
            >
              <Text style={styles.cancelButtonText}>Abbrechen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 44,
  },
  content: {
    flex: 1,
  },
  settingsSection: {
    paddingVertical: 20,
  },
  sectionTitle: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  radiusContainer: {
    backgroundColor: Colors.background,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  radiusHeaderFull: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  radiusTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  radiusValue: {
    color: Colors.accent,
    fontSize: 20,
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  radiusLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 5,
  },
  radiusLabel: {
    color: Colors.gray,
    fontSize: 11,
    fontWeight: '500',
  },
  radiusLabelActive: {
    color: Colors.accent,
    fontWeight: 'bold',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
    marginBottom: 2,
  },
  settingItemHighlight: {
    backgroundColor: 'rgba(254, 92, 0, 0.05)',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconContainerHighlight: {
    backgroundColor: 'rgba(254, 92, 0, 0.1)',
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
  },
  settingTitleHighlight: {
    color: Colors.accent,
  },
  settingSubtitle: {
    color: Colors.gray,
    fontSize: 13,
  },
  dangerZone: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 15,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.gray,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ff4458',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  deleteText: {
    color: '#ff4458',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 30,
    width: '80%',
  },
  modalTitle: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  modalButtonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  cancelButtonText: {
    color: Colors.text,
    fontSize: 16,
    textAlign: 'center',
  },
});
