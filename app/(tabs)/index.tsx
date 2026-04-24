import { View } from "react-native";
import { globalStyles } from "@/styles/global";
import StatusContainer from "@/container/statusContainer";

// ToDo: StatsContainer fertig
//       InfoContainer fertig

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <StatusContainer></StatusContainer>
    </View>
  );
}
