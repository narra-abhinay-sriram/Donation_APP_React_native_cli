import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { Globalstyle } from '../../assets/styles/Globalstyle';
import { style } from './style';

function Input(props)
{
    const [email,setmail] = useState('');
    return (
        <View >
            <Text style={style.label}>
                {props.label}
            </Text>
            <TextInput style={style.input}
             placeholder={ props.placeholder || null}
             keyboardType={ props.keyboardType || 'default'}
             secureTextEntry={ props.secureTextEntry || false}
             value={email}
             onChangeText={(val)=>
             {
                setmail(val);
                props.onChangeText(val);
                }} />

        </View>
    );
}
export default Input;
