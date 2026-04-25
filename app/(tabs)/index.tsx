import { View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { globalStyles } from "@/styles/global";
import StatusContainer from "@/container/statusContainer";
import Counter from "@/container/counter";

// ToDo: StatsContainer fertig
//       InfoContainer fertig

export default function Index() {
  const [timerAcitve, setTimerActive] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("Please set a Profile Picture as .png");
    }
  };

  return (
    <View style={globalStyles.container}>
      <StatusContainer></StatusContainer>
      <Counter
        timerAcitve={timerAcitve}
        onToggle={() => setTimerActive((prev) => !prev)}
      ></Counter>
    </View>
  );
}
