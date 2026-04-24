import { StyleSheet } from "react-native";

// In dieser Datei nur Sachen, die sonst redundant wären,
// einfach zur Einfachheit :3

export const globalStyles = StyleSheet.create({
  // Standard Container, aka. der Hintergrund von jedem
  // Panel

  container: {
    flex: 1,
    backgroundColor: "#101010",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  // Standard Text Farbe, die Panel spezifischen sind dann
  // in den jeweiligen .tsx Files :)

  text: {
    color: "#fff",
    fontSize: 16,
  },

  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: "1%",
  },
});
