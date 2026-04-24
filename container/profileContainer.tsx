import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "@/styles/global";

export default function ProfileContainer() {
  return (
    <View style={style.container}>
      <Text style={globalStyles.headerText}>*Username*</Text>
      <Text style={globalStyles.text}>*Settings description*</Text>
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
