import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Link href="/login">
        <Button title="Login" />
      </Link>
      <Link href="/register">
        <Button title="Register" />
      </Link>
    </View>
  );
}
