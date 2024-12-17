import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

export const style = StyleSheet.create({
    image:{
        width:horizontalScale(140),
        height:verticalScale(170),
        borderRadius:horizontalScale(20),
    },
    badge:{
        position:'absolute',
        zIndex:1,
        top:verticalScale(13),
        left:horizontalScale(10),
    },
    donationContainer:{
        marginTop:verticalScale(10),
    },
    priceContainer:{
          marginTop:verticalScale(4),
    },
});

