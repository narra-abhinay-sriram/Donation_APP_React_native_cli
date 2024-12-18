import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

export const style = StyleSheet.create({
    container:{
        marginHorizontal:horizontalScale(20),
        flex:1,
        justifyContent:'center',
    },
   BackButton:{
    marginLeft:horizontalScale(14),
    marginTop:verticalScale(7),
   },
});
