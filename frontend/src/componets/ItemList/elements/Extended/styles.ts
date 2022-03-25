import { StyleSheet } from "react-native";

import { Colors, Spacing } from "../../../../styles";
import { RFPercentage } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
  detailContainer: {
    position: "absolute",
    backgroundColor: Colors.backgroundColor ,
    borderRadius: 25,
  },
  headerText: {
    fontSize: RFPercentage(5.5),
    fontWeight: "700",
    padding: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
