import { View, StyleSheet, Text } from "react-native"
import { useAuth } from "../auth-context"
import { HelloWave } from "@/components/HelloWave"

export default function HomeScreen() {
  const { user, signOut } = useAuth()

  return (
    <View style={styles.container}>
      <Text>Motiv<HelloWave /></Text>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.message}>Map 1</Text>
        <Text style={styles.message}>Map 2</Text>
        <Text style={styles.message}>Map 3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  button: {
    marginBottom: 40,
  },
})

