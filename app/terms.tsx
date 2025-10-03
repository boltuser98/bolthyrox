import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { ArrowLeft } from 'lucide-react-native';

export default function TermsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color={Colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nutzungsbedingungen</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>1. Allgemeine Bedingungen</Text>
        <Text style={styles.text}>
          Diese Nutzungsbedingungen regeln die Nutzung der Hyrox Com App. Durch die Registrierung
          und Nutzung der App erklären Sie sich mit diesen Bedingungen einverstanden.
        </Text>

        <Text style={styles.sectionTitle}>2. Nutzung der App</Text>
        <Text style={styles.text}>
          Die App dient der Vernetzung von Hyrox-Athleten und -Enthusiasten. Nutzer verpflichten
          sich, die App nur für legale Zwecke zu verwenden und die Rechte anderer Nutzer zu
          respektieren.
        </Text>

        <Text style={styles.sectionTitle}>3. Datenschutz</Text>
        <Text style={styles.text}>
          Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Weitere Informationen finden Sie
          in unserer Datenschutzerklärung.
        </Text>

        <Text style={styles.sectionTitle}>4. Haftungsausschluss</Text>
        <Text style={styles.text}>
          Die Nutzung der App erfolgt auf eigenes Risiko. Wir übernehmen keine Haftung für
          Schäden, die durch die Nutzung der App entstehen können.
        </Text>

        <Text style={styles.sectionTitle}>5. Änderungen</Text>
        <Text style={styles.text}>
          Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen
          werden den Nutzern rechtzeitig mitgeteilt.
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