import { StyleSheet } from "react-native";
import { verticalScale } from "./scaling";

export const Globalstyle = StyleSheet.create({
    background:{
        backgroundColor:'#FFFFFF',
    },
    flex:{
        flex:1,
    },
    marginBottom24:{
        marginBottom:verticalScale(24),
    },
});
