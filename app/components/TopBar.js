import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TopBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Lógica de logout
    AsyncStorage.removeItem("jwt");
    window.location.href = "/login";
  };

  return (
    <View style={styles.topBar}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.linksContainer}>
        <Link href="/dashboard" style={styles.link}>
          Overview
        </Link>
        <Link href="/dashboard/analytics" style={styles.link}>
          Analytics
        </Link>
        <Link href="/dashboard/manage-offers" style={styles.link}>
          Manage Offers
        </Link>
        <Link href="/dashboard/sponsored-challenge" style={styles.link}>
          Sponsored Challenge
        </Link>
      </View>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.avatarButton}>
          {/* <Image
            source={require("../../assets/avatar.png")} // Asegúrate de tener un avatar en la carpeta assets
            style={styles.avatar}
          /> */}
          <Ionicons
            name={dropdownVisible ? "chevron-up" : "chevron-down"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.dropdownItem}>Log Out</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    height: 60,
    backgroundColor: "#3366ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  linksContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    marginHorizontal: 10,
    fontSize: 16,
    textDecorationLine: "none",
  },
  avatarContainer: {
    position: "relative",
  },
  avatarButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  dropdownMenu: {
    position: "absolute",
    top: 50,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 10,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333",
  },
});
