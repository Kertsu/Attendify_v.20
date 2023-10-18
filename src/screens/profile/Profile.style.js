import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    display: "flex",
    alignItems: "center",
  },
  separator: {
    width: "100%",
    paddingVertical: 5,
    backgroundColor: COLORS.bgTertiary,
  },
  secOne: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  avatarContainer: { width: "35%", aspectRatio: 1 / 1, position: "relative" },
  img: {
    width: "40%",
    height: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 1000,
  },
  changePfp: {
    backgroundColor: COLORS.gray,
    aspectRatio: 1 / 1,
    borderRadius: 1000,
    position: "absolute",
    padding: 4,
    bottom: 0,
    right: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  camIcon: { aspectRatio: 1 / 1, borderRadius: 1000 },
  secTwo: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
  secTitle: { fontSize: SIZES.large, fontWeight: "bold" },
  detailsContainer: {
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 10,
    gap: 8,
  },
  infoWrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoText: { color: COLORS.darkGray, fontSize: SIZES.medium },
  editBtn: {
    alignSelf: "center",
    width: "95%",
    backgroundColor: COLORS.bgSecondary,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
    marginTop: 10,
  },
});
