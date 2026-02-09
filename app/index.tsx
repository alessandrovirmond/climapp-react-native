import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <Image source={require("../assets/images/logo.png")}></Image>
      <Image source={require("../assets/images/weather.png")}></Image>
      <Text>Boas Vindas</Text>
      <TouchableOpacity style={style.button}>
        <Text style={style.title}>Entrar</Text>
        <MaterialIcon name="arrow-forward" size={24} color={"#01080E"}/>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
    paddingVertical: 79,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 25,
    color: "#FFF"
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#7693FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    flexDirection: "row"
  },
  buttonTitle: {
    color: "#01080E",
    fontSize: 20,
    fontWeight: 600
  }
});
