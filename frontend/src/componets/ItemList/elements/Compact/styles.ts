import { StyleSheet } from "react-native";
import { Colors, Spacing } from "../../../../styles";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: Colors.cardColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 2,
    marginVertical:15
  },
  title: {
    color: Colors.textColor,
    fontSize: 36,
    fontWeight: "bold",
    paddingHorizontal: Spacing.padding,
    paddingVertical: Spacing.padding * 3,
  },
  details: {
    padding: Spacing.padding,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Spacing.extraMargin,
  },
  model: {
    color: Colors.textColor,
    fontSize: 30,
  },
  line: {
    height: 1,
    backgroundColor: Colors.divisorColor,
    marginVertical: Spacing.extraMargin,
  },
  makeYear: {
    paddingVertical: Spacing.extraMargin,
  },
  headerText:{
    fontSize:RFPercentage(5.5) ,
    fontWeight:"700",
    padding:10
  }
});