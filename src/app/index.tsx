import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PhraseCard from "./components/phraseCard";
import SectionTitle from "./components/session-title";
import { colors } from "./theme/colors";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}> frases de Viagem 🌍</Text>
        <Text style={styles.subtitle}>Toque para ouvir a pronúncia</Text>

        <SectionTitle emoji="✈️">No Aeroporto</SectionTitle>
        <PhraseCard
          phrase="Onde fica o banheiro"
          translation="Where is the bathroom?"
        />
        <PhraseCard
          phrase="Quanto custa?"
          translation="How much does is cost?"
        />
        <PhraseCard
          phrase="Qual o preço do ingresso?"
          translation="what is the price of the ticket?"
        />

        <SectionTitle emoji="🚨">Emergência</SectionTitle>

        <PhraseCard
          phrase="Quanto custa?"
          translation="How much does is cost?"
        />
        <PhraseCard
          phrase="Qual o preço do ingresso?"
          translation="what is the price of the ticket?"
        />

        <SectionTitle emoji="🇪🇸">Espanhol</SectionTitle>

        <PhraseCard phrase="Olá, como vai?" translation="Hola, ¿qué tal?" language="es" />
        <PhraseCard
          phrase="Onde fica o banheiro?"
          translation="¿Dónde está el baño?"
          language="es"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.blue,
  },
  subtitle: {
    fontSize: 15,
    color: colors.mutedText,
    marginBottom: 8,
  },
});
