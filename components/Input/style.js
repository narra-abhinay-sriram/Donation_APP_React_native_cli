import { StyleSheet } from "react-native";
import { getfontFamily } from "../../assets/fonts/helper";
import { fontScaling, verticalScale } from "../../assets/styles/scaling";

export const style = StyleSheet.create({
    label:{
        fontFamily:getfontFamily('Inter_28pt',400),
        color:'#36455A',
        fontSize:fontScaling(8),
        lineHeight:fontScaling(10),
    },
    input:{
        padding:verticalScale(10),
        borderBottomWidth:1,
        borderBottomColor:'rgba(167,167,167,0.5)',
    },
});
