import { View } from "react-native";
import { globalStyles } from "@/styles/global";
import StatusContainer from "@/container/statusContainer";
import Counter from "@/container/counter";

// ToDo: StatsContainer fertig
//       InfoContainer fertig

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <StatusContainer></StatusContainer>
      <Counter isRunning={false} numberOfStarts={0}></Counter>
    </View>
  );
}
