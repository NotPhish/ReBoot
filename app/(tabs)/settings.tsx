import { Text, View } from "react-native";
import { globalStyles } from "@/styles/global";
import ProfileContainer from "@/container/profileContainer";

export default function SettingsScreen() {
  return (
    <View style={globalStyles.container}>
      <ProfileContainer></ProfileContainer>
    </View>
  );
}
