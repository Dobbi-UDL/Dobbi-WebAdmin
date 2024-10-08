import { Slot, useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
// import { useEffect } from "react";
// import { isAuthenticated } from "../utils/auth";

export default function DashboardLayout() {
  const router = useRouter();

  //   useEffect(() => {
  //     if (!isAuthenticated()) {
  //       router.replace("/login");
  //     }
  //   }, []);

  return (
    <View style={styles.container}>
      <TopBar />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
