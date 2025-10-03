import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { ArrowLeft } from 'lucide-react-native';

export default function CookiesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color={Colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cookie-Richtlinien</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>1. Was sind Cookies?</Text>
        <Text style={styles.text}>
          Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere
          App nutzen. Sie helfen uns, die App-Funktionalität zu verbessern und Ihr
          Nutzererlebnis zu personalisieren.
        </Text>

        <Text style={styles.sectionTitle}>2. Arten von Cookies</Text>
        <Text style={styles.text}>
          Wir verwenden verschiedene Arten von Cookies:
          {'\n'}- Notwendige Cookies: Für die Grundfunktionen der App
          {'\n'}- Leistungs-Cookies: Zur Analyse der App-Nutzung
          {'\n'}- Funktionale Cookies: Zur Speicherung Ihrer Einstellungen
        </Text>

        <Text style={styles.sectionTitle}>3. Cookie-Verwaltung</Text>
        <Text style={styles.text}>
          Sie können Cookies in Ihren Geräteeinstellungen verwalten oder löschen. Bitte beachten
          Sie, dass die Deaktivierung bestimmter Cookies die Funktionalität der App
          beeinträchtigen kann.
        </Text>

        <Text style={styles.sectionTitle}>4. Drittanbieter-Cookies</Text>
        <Text style={styles.text}>
          Einige Funktionen der App nutzen Dienste von Drittanbietern, die möglicherweise eigene
          Cookies setzen. Diese unterliegen den Datenschutzrichtlinien der jeweiligen Anbieter.
        </Text>

        <Text style={styles.sectionTitle}>5. Änderungen</Text>
        <Text style={styles.text}>
          Wir können unsere Cookie-Richtlinien von Zeit zu Zeit aktualisieren. Änderungen werden
          in der App bekannt gegeben.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    color: Colors.accent,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: Colors.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },
});