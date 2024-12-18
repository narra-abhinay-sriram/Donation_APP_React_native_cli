import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import { Globalstyle } from '../../assets/styles/Globalstyle';
import Input from '../../components/Input/Input';
import { style } from './style';
import { Header } from '../../components/header/Header';
import { Button } from '../../components/button/Button';

function Login({navigation})
{
    const [email,setemail] =  useState('');
    const [password,setpassword] = useState('')
    return (
        <SafeAreaView style={[Globalstyle.background,Globalstyle.flex]} >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container} >
                <View style={Globalstyle.marginBottom24}>
                    <Header type={2} title={'Welcome Back'} />
                </View>
            <View style={Globalstyle.marginBottom24}>
                <Input
                label={'Email'}
                 placeholder={'Enter your email'}
                 keyboardType="email-address"
                 onChangeText={value=>setemail(value)}
                  />
            </View>
            <View style={Globalstyle.marginBottom24}>
                <Input
                label={'Password'}
                 placeholder={'******'}
                 onChangeText={value=>setpassword(value)}
                 secureTextEntry={true}
                  />
            </View>
            <View >
                <Button title={'Login'} />
            </View>
            <Pressable style={style.pressabel} onPress={()=>navigation.navigate('register')}>
                <Header title={'Dont have an account?'} type={3} color={'#156CF7'} />
            </Pressable>


            </ScrollView>
        </SafeAreaView>
    );
}
export default Login;
