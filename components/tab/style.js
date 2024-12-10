import { StyleSheet } from "react-native";
import { fontScaling, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getfontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    Tab:{
        backgroundColor:'#2979F2',
        height:verticalScale(45),
        justifyContent:'center',
        borderRadius:horizontalScale(50),

    },
    Inactive:{
backgroundColor:'#F3F5F9',
    },

    text:{
        color:'#FFFFFF',
        fontFamily:getfontFamily('Inter_28pt',500),
        fontSize:fontScaling(9),
        lineHeight:fontScaling(10),
        textAlign:'center',

    },
    Inactivetext:{
        color:'#79869F',
    },
});
