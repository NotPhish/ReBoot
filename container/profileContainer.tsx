import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { globalStyles } from "@/styles/global";

// Make it pull the pfp uploaded by the user from
// (for now) local storage (NO cloud **yet**)

const PlaceholderProfilePicture = require("@/assets/images/dummy-pfp.png");

export default function ProfileContainer() {
  return (
    <View style={style.container}>
      <View>
        <Image
          source={PlaceholderProfilePicture}
          style={style.profilePictureContainer}
        ></Image>
      </View>
      <Text style={globalStyles.headerText}>*Username*</Text>
      <Text style={globalStyles.text}>*Settings description*</Text>
    </View>
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
    // flexDirection: "row",
  },

  profilePictureContainer: {
    position: "fixed",
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: "center",
  },
});
