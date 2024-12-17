import React, { useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { style } from './style';
import { horizontalScale } from '../../assets/styles/scaling';
export const Tab = (props)=>{
    const [width,setwidth] = useState(0);
    const textref = useRef();
    const paddinghorizontal = 33;
    const Tabwidth = {
        width:horizontalScale(paddinghorizontal * 2 + width),
    };
return (
    <Pressable

    style={[style.Tab,props.isInactive && style.Inactive,Tabwidth]}
    onPress={()=> props.onPress(props.tabid)}>

        <Text
        onTextLayout={(e)=>{
            setwidth(e.nativeEvent.lines[0].width);
        }}
        ref={textref}
        style={[style.text,props.isInactive && style.Inactivetext]}>
            {props.title}
        </Text>
    </Pressable>
);
};
