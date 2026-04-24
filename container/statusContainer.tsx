import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "@/styles/global";

export default function StatusContainer() {
  return (
    <View style={style.container}>
      <Text style={globalStyles.headerText}>Your Stats:</Text>
      <Text style={globalStyles.text}>6 Days and 7 Hours </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#202020",
    borderRadius: 15,
    paddingLeft: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingRight: "5%",
  },
});
