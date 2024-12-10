import { StyleSheet } from "react-native";
import { getfontFamily } from "../../assets/fonts/helper";
import { fontScaling } from "../../assets/styles/scaling";

export const style = StyleSheet.create({
    title1:{
        fontFamily:getfontFamily('Inter_28pt',600),
        fontSize:fontScaling(20),
        lineHeight:fontScaling(29),

    },
    title2:{
        fontFamily:getfontFamily('Inter_28pt',600),
        fontSize:fontScaling(14),
        lineHeight:fontScaling(22),

    },
    title3:{
        fontFamily:getfontFamily('Inter_28pt',600),
        fontSize:fontScaling(10),
        lineHeight:fontScaling(19),

    },
});
