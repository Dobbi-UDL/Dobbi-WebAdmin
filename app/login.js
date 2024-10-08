import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Fondo superior curvo */}
      <View style={styles.topBackground}>
        <Text style={styles.title}>Dobbi</Text>
      </View>

      {/* Contenedor de Login */}
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          autoCapitalize="none"
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
            title="Login"
            color="#3366ff"
            onPress={() => {
              /* Lógica de login */
            }}
          />
        </View>

        {/* Enlace para registrarse */}
        <Text style={styles.registerText}>
          Don’t have an account?{" "}
          <Link href="/register" style={styles.link}>
            Register
          </Link>
        </Text>
      </View>

      {/* Imagen inferior */}
      <ImageBackground
        source={require("../assets/dobbi.jpg")} // Ruta a la imagen en la carpeta assets
        style={styles.bottomImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Aquí van los estilos ya definidos antes
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
  loginContainer: {
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
  registerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#333",
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
  bottomImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
});
