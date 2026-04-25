import { Text, View, StyleSheet, Pressable } from "react-native";
import TimerLogic from "@/backend/functions/timerLogic";

type Props = {
  isRunning: boolean;
  numberOfStarts: number;
};

export default function Counter({ isRunning, numberOfStarts }: Props) {
  numberOfStarts = 0;
  isRunning = false;

  if (isRunning === false && numberOfStarts === 0) {
    numberOfStarts++;
    isRunning = true;

    return (
      <View style={style.container}>
        <Pressable style={style.buttonStart} onPress={() => (isRunning = true)}>
          <Text style={style.buttonDescText}>Start Timer</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={style.container}>
        <Pressable style={style.buttonStop} onPress={() => (isRunning = false)}>
          <Text style={style.buttonDescText}>Stop Timer</Text>
        </Pressable>
      </View>
    );
  }
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
  buttonStop: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    width: "97%",
    height: "90%",
    borderRadius: 15,
    backgroundColor: "#ba2b2b",
    marginTop: 4,
  },
  buttonDescText: {
    color: "#202020",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
