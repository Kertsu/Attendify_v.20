import { Platform, StatusBar, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : ''
  },
  imageContainer: {
    backgroundColor: COLORS.bgPrimary,
    borderBottomStartRadius: 60,
    borderTopEndRadius: 60,
  },
  imageContainerWrapper: {
    width: "100%",
    height: "50%",
    backgroundColor: COLORS.white,
  },
  full: { width: "100%", height: "100%" },
  bottomContainerWrapper: {
    width: "100%",
    height:'50%',
    alignItems: "center",
    backgroundColor: COLORS.bgPrimary,
  },
  bottomContainer: {
    backgroundColor: COLORS.white,
    borderTopEndRadius: 60,
    paddingHorizontal: 20,
  },
  formTitle: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: "2%",
  },
  logo: { aspectRatio: 1 / 1, width : "35%" },
  bottomFormContainer: {
    height: "70%",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  inputWrapper: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    backgroundColor: COLORS.bgTertiary,
    borderRadius: 1000000,
  },
  loginButton: {
    width: "100%",
    height: "40%",
    backgroundColor: COLORS.bgPrimary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10000,
  },
  question: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
