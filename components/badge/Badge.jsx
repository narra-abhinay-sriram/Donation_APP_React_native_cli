import React, { useRef, useState } from "react";
import { Text, View } from "react-native"
import { style } from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

export const Badge = (props)=>{
    const [width,setwidth] = useState(0);
    const textRef = useRef(null);
    const paddinghorizontal = 10;
    const Tabwidth = {
        width: horizontalScale(paddinghorizontal * 2 + width),
    };
    return (
        <View style={[style.Badge,Tabwidth]}>
            <Text
            onTextLayout={(e)=>{setwidth(e.nativeEvent.lines[0].width);}}
            ref={textRef}
            style={style.text}>
              {props.title}
            </Text>
        </View>
    );
};
