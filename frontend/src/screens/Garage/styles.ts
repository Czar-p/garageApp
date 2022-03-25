import { StyleSheet } from "react-native";
import { Spacing } from "../../styles";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    padding: Spacing.padding,
    paddingTop:Spacing.padding * 3,  
  },
  list: {
    flex: 1,
    width: "100%",
  },
  headerText:{
    fontSize:RFPercentage(5.5) ,
    fontWeight:"700",
    marginBottom:36
  }
});
