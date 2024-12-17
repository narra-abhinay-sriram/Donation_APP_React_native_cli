import { StyleSheet } from "react-native";
import { fontScaling, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getfontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    header:{
        marginTop:verticalScale(20),
        marginHorizontal:horizontalScale(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    headerIntro:{
        fontFamily:getfontFamily('Inter_28pt',400),
        fontSize:fontScaling(12),
        lineHeight:fontScaling(19),
        color:'#636776',
    },
    username:{marginTop:verticalScale(1)},
    profileimage:{
       width:horizontalScale(50),
       height:verticalScale(50),
    },
    serach:{
        marginTop:verticalScale(20),
        marginHorizontal:horizontalScale(24),
    },
    highlightedImage:{
        width:'100%',
        height:verticalScale(150),
    },
    highlightedImageContainer:{
        marginHorizontal:horizontalScale(20),
    },
    category:{
        marginRight:horizontalScale(5),
    },
    categories:{
        marginLeft:horizontalScale(20),
    },
    categoryHeader:{
        marginHorizontal:horizontalScale(20),
        marginBottom:verticalScale(10),
        marginTop:verticalScale(5),
    },
    donationContainer:{
      marginTop:verticalScale(15),
  marginHorizontal:horizontalScale(15),
  flexDirection:'row',
  justifyContent:'space-between',
  flexWrap:'wrap',
    },
    singledonationitem:{
        maxWidth:'49%',
        marginBottom:verticalScale(20),
    },
});
export default style;
