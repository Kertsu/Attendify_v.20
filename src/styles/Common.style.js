import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
export const styles = StyleSheet.create({
  inputField: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.outlineGray,
    alignItems:'center'
  },
  flexOne: { flex: 1 },
  btn: {
    width: "80%",
    backgroundColor: COLORS.bgPrimary,
    padding: 10,
    borderRadius: 5,
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
