import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Globalstyle } from '../../assets/styles/Globalstyle';
import Input from '../../components/Input/Input';
import { style } from './style';

function Login()
{
    const [email,setemail] =  useState('');
    return (
        <SafeAreaView style={[Globalstyle.background,Globalstyle.flex]} >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container} >
               <Input
                label={'Email'}
                 placeholder={'Enter your email'}
                 keyboardType="email-address"
                 onChangeText={value=>setemail(value)}
                 secureTextEntry={true}
                  />

            </ScrollView>
        </SafeAreaView>
    );
}
export default Login;
