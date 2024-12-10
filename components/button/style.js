import { StyleSheet } from "react-native";
import { fontScaling, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getfontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    button:{
        backgroundColor:'#2979F2',
        height:verticalScale(55),
        justifyContent:'center',
        borderRadius:horizontalScale(70),
        margin:horizontalScale(20),

    },
    disabled:{
        opacity:0.5,
    },

    text:{
        color:'#FFFFFF',
        fontFamily:getfontFamily('Inter_28pt',500),
        fontSize:fontScaling(12),
        lineHeight:fontScaling(15),
        textAlign:'center',

    },
});
