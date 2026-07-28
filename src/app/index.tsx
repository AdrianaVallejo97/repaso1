import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Escudo_selección_española_2026.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        ¡ESPAÑA CAMPEÓN DEL MUNDIAL 2026!
      </Text>

      <Text style={styles.subtitle}>
        Bienvenido a la aplicación oficial
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CA1111",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
});