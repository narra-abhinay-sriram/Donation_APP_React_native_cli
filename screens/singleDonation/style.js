import { StyleSheet } from "react-native";
import { fontScaling, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getfontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    container:{
        marginHorizontal:horizontalScale(20),
        marginTop:horizontalScale(20),
    },
    image:{
        marginTop:verticalScale(20),
        marginBottom:verticalScale(24),
        width:'100%',
        height:verticalScale(240),
        borderRadius:horizontalScale(10),
    },
    badge:{
        marginBottom: verticalScale(16),

    },
    description:{
        marginTop: verticalScale(7),
        marginHorizontal: horizontalScale(7),
        fontFamily:getfontFamily('Inter_28pt',400),
        fontSize: fontScaling(8),
    marginBottom: verticalScale(10),
    },
    button:{
        marginHorizontal: horizontalScale(20),

    },
});
