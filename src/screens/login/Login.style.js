import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
export const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  bottomWrapper: {
    alignItems: "center",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    gap: SIZES.xxxLarge,
    backgroundColor:COLORS.white
  },
  textContainer: {
    flex: 0.3,
    gap: SIZES.small,
    width: "80%",
    marginTop: "5%",
  },
  textTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.textSecondary,
    fontSize: SIZES.xxLarge,
  },
  textSubtitle: { textAlign: "center", color: COLORS.textPrimary },
  form: { flex: 1, width: "100%", alignItems: "center", marginTop: "2%", gap:SIZES.medium },
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
    width: "100%",
    backgroundColor: COLORS.bgPrimary,
    padding: 10,
    borderRadius: 5,
  },
  btnText: { textAlign: "center", color: COLORS.white, fontWeight: "bold" },
  changeEmailText: {
    display: "flex",
    marginBottom: SIZES.medium,
    gap:SIZES.xSmall,
    width: "80%", alignItems:'center'
  },
  changeEmail: {
    color: COLORS.bgPrimary,
    borderBottomColor: COLORS.bgPrimary,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
});
