import { StyleSheet } from "react-native";
import { fontScaling, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getfontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:horizontalScale(16),
        backgroundColor:'#F3F5F9',
        height:verticalScale(50),
        borderRadius:(20),

    },
    searchinput:{
        flex:1,
       marginLeft:horizontalScale(5),
       height:'100%',
       fontFamily:getfontFamily('Inter_28pt',400),
       fontSize:fontScaling(8),
       lineHeight:fontScaling(12),
       color: '#686C7A',


    },
});
