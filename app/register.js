import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      {/* Fondo superior curvo */}
      <View style={styles.topBackground}>
        <Text style={styles.title}>Register</Text>
      </View>

      {/* Contenedor de Register */}
      <View style={styles.registerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Register"
            color="#3366ff"
            onPress={() => {
              /* Lógica de registro */
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
  },
  topBackground: {
    width: "100%",
    height: 300,
    backgroundColor: "#FFD44D",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3366ff",
  },
  registerContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});
