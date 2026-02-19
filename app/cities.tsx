import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import citiesData from "../data/cities.json";

const Cities = () => {
    
  const router = useRouter();

  const [search, setSearch] = useState("");

  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    const newFilteredCities = citiesData.filter((city) =>
      city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );

    setFilteredCities(newFilteredCities);
  }, [search]);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Digite a cidade"
          placeholderTextColor={"#ffffff"}
          value={search}
          onChangeText={(value) => setSearch(value)}
          style={style.input}
        />
        <MaterialIcons name="search" size={18} color={"#ffffff"} />
      </View>
      <ScrollView>
        <View style={style.scrollList}>
          {filteredCities.map((city) => (
            <TouchableOpacity
              onPress={() => router.push(`/${city.city}`)}
              key={city.city}
              style={style.listItem}
            >
              <Image
                style={style.cityImage}
                source={require("../assets/images/clouds.png")}
              />
              <Text style={style.cityName}>
                {city.city.replace(", ", " - ")}
              </Text>
              <Text style={style.cityTemp}>{city.temp}º</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
    paddingTop: 40,
  },
  scrollList: {
    gap: 16,
  },
  listItem: {
    height: 63,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  cityName: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
  cityTemp: {
    color: "#FFFFFF",
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
  },
  cityImage: {
    width: 27,
    height: 24,
  },
  inputContainer: {
    height: 46,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 24,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  input: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
});

export default Cities;
