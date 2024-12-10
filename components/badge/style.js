import { StyleSheet } from "react-native";
import { fontScaling, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getfontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    Badge:{
        backgroundColor:'#145855',
        height:verticalScale(22),
        justifyContent:'center',
        borderRadius:horizontalScale(50),

    },


    text:{
        color:'#FFFFFF',
        fontFamily:getfontFamily('Inter_28pt',600),
        fontSize:fontScaling(6),
        lineHeight:fontScaling(8),
        textAlign:'center',

    },

});
