import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

export  const Header = (props)=>{
    const headerType = ()=>{
        switch(props.type){
        case 1:
            return style.title1;
        case 2:
            return style.title2;
        case 3:
            return style.title3;
        default:
        return style.title1;
        }

    };
 return (
    <View>
        <Text style={[headerType(),props.color && {color:props.color}]}>
            {props.title}
        </Text>
    </View>
 );
};
