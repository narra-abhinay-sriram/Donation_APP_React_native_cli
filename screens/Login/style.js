import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/styles/scaling";

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
});
