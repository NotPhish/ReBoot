import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import { globalStyles } from "@/styles/global";
import ProfileContainer from "@/container/profileContainer";

export default function SettingsScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Please set a Profile Picture as .png");
    }
  };

  return (
    <View style={globalStyles.container}>
      <ProfileContainer
        onPress={pickImageAsync}
        profilePicturePath={selectedImage}
      ></ProfileContainer>
    </View>
  );
}
