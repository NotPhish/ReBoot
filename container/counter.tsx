import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Counter() {
  return (
    <View style={style.container}>
      <Pressable style={style.buttonStart}>
        <Text style={style.buttonDescText}>Start Timer</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: "90%",
    height: "10%",
    backgroundColor: "#202020",
    alignContent: "center",
  },
  buttonStart: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    width: "97%",
    height: "90%",
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 4,
  },
  buttonReset: {
    // flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    width: "25%",
    height: "90%",
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 4,
  },
  buttonDescText: {
    color: "#202020",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
