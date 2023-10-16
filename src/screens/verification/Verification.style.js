import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
    flexOne: { flex: 1 },
    bottomWrapper: {
      flex: 1,
      backgroundColor: COLORS.bgSecondary,
      alignItems: "center",
      borderTopEndRadius: 50,
    },
    textContainer: {
      flex: 0.3,
      backgroundColor: COLORS.bgSecondary,
      borderTopEndRadius: 50,
      width: "60%",
      marginTop: "5%",
      marginBottom: "10%",
    },
    textTitle: {
      textAlign: "center",
      fontWeight: "bold",
      color: COLORS.textSecondary,
      fontSize: SIZES.xxLarge,
    },
    textSubtitle: { textAlign: "center", color: COLORS.textPrimary },
    form: { flex: 1, width: "100%", alignItems: "center", marginTop: "2%" },
    inputField: {
      flexDirection: "row",
      gap: 10,
      padding: 10,
      width: "80%",
      borderRadius: 1000,
      borderWidth: 1,
      borderColor: COLORS.bgPrimary,
    },
    btn: {
      width: "80%",
      backgroundColor: COLORS.bgPrimary,
      padding: 10,
      borderRadius: 10000,
      marginTop: "5%",
    },
    btnText: { textAlign: "center", color: COLORS.white, fontWeight: "bold" },
    changeEmailText: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
      marginBottom: "3%",
    },
    changeEmail: {
      color: COLORS.bgPrimary,
      borderBottomColor: COLORS.bgPrimary,
      borderBottomWidth: 1,
      fontWeight: "bold",
    },
  });