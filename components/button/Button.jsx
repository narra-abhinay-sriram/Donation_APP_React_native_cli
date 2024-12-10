import React from 'react';
import { Pressable, Text } from 'react-native';
import { style } from './style';
export const Button = (props)=>{
return (
    <Pressable
    disabled={props.isDisabled}
    style={[style.button,props.isDisabled && style.disabled]}
    onPress={()=> props.onPress()}>
        <Text style={style.text}>
            {props.title}
        </Text>
    </Pressable>
);
};
