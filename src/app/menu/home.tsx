import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>

      <Image
        source={require("../../../assets/images/Escudo_selección_española_2026.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        España Campeón Mundial 2026
      </Text>

      <Text style={styles.subtitle}>
        Campeón de la Copa Mundial de la FIFA 2026
      </Text>

      <View style={styles.card}>

        <Image
          source={require("../../../assets/images/arg.png")}
          style={styles.bandera}
        />

        <Text style={styles.sub}>
          Subcampeón
        </Text>

        <Text style={styles.country}>
          Argentina
        </Text>

        <View style={styles.linea} />

        <Text style={styles.info}>
          <Text style={styles.negrita}>Marcador:</Text> España 1 - 0 Argentina
        </Text>

        <Text style={styles.info}>
          <Text style={styles.negrita}>Gol:</Text> Ferran Torres (Min. 96')
        </Text>

        <Text style={styles.info}>
          <Text style={styles.negrita}>Estadio:</Text> MetLife Stadium
        </Text>

        <Text style={styles.info}>
          <Text style={styles.negrita}>Fecha:</Text> 19 de julio de 2026
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AA151B",
    padding: 20,
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 8,
    marginBottom: 25,
    textAlign: "center",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    elevation: 6,
  },

  bandera: {
    width: 120,
    height: 80,
    resizeMode: "contain",
    marginBottom: 15,
  },

  sub: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#555",
  },

  country: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2A75BB",
    marginVertical: 10,
  },

  linea: {
    width: "100%",
    height: 1,
    backgroundColor: "#DDD",
    marginVertical: 15,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "flex-start",
  },

  negrita: {
    fontWeight: "bold",
  },

});