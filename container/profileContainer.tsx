import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

import { globalStyles } from "@/styles/global";

// ToDo: Make it pull the pfp uploaded by the user from
// (for now) local storage (NO cloud **yet**)
//
type Props = {
  profilePicturePath: string;
  onPress?: () => void;
};

const PlaceholderProfilePicture = require("@/assets/images/dummy-pfp.png");

export default function ProfileContainer({
  onPress,
  profilePicturePath,
}: Props) {
  return (
    <Pressable style={style.container} onPress={onPress}>
      <View>
        <Image
          source={profilePicturePath}
          style={style.profilePictureContainer}
        ></Image>
      </View>
      <Text style={globalStyles.headerText}>*Username*</Text>
      <Text style={globalStyles.text}>*Settings description*</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "90%",
    backgroundColor: "#202020",
    borderRadius: 15,
    paddingLeft: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingRight: "5%",
    alignContent: "center",
  },

  profilePictureContainer: {
    position: "fixed",
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "center",
  },
});
