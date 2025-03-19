import { View, StyleSheet, Text } from "react-native"
import { useAuth } from "./auth-context"

export default function HomeScreen() {
  const { user, signOut } = useAuth()

  return (
    <View style={styles.container}>
      Motiv
      <View style={styles.content}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.message}>You have successfully logged in.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-between",
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

