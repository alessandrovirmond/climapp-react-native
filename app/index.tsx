import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {

  const router = useRouter()

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <Image source={require("../assets/images/logo.png")}></Image>
      <Image source={require("../assets/images/weather.png")}></Image>
      <Text style={style.title}>Boas Vindas</Text>
      <TouchableOpacity onPress={() => { 
        router.push("/cities")
      }} style={style.button}>
        <Text style={style.buttonTitle}>Entrar</Text>
        <MaterialIcon name="arrow-forward" size={24} color={"#01080E"} />
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
    color: "#FFFFFF",
    fontFamily: "Montserrat_400Regular"
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
    fontWeight: 600,
    fontFamily: "Montserrat_600SemiBold"
  }
});
