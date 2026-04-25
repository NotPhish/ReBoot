import { View } from "react-native";
import { useState } from "react";
import { globalStyles } from "@/styles/global";
import StatusContainer from "@/container/statusContainer";
import Counter from "@/container/counter";

// ToDo: StatsContainer fertig
//       InfoContainer fertig

export default function Index() {
  const [timerAcitve, setTimerActive] = useState(false);

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
