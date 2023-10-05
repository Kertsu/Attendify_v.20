import {  StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  onBoardingImages: {
    width: 250,
    height: 250,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  tabButton: { color: "#FFFFFF", marginHorizontal: 10, fontWeight: "bold" },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginHorizontal: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginHorizontal: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  innerIndicator: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: "#1DA1F2",
  },
  activeInnerIndicator: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    backgroundColor: "#FFFFFF",
  },
});
