import { StyleSheet } from "react-native";
import { fontScaling, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getfontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    container:{
        marginHorizontal:horizontalScale(20),
        flex:1,
        justifyContent:'center',
    },
    pressabel:{
        alignItems:'center',
        marginLeft:horizontalScale(2),
    },
    update:{
        fontFamily:getfontFamily('Inter_28pt',600),
        fontSize:fontScaling(10),
        color: '#FF0000',
        marginBottom: verticalScale(24),
       },
});
