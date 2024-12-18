import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import { Globalstyle } from '../../assets/styles/Globalstyle';
import Input from '../../components/Input/Input';
import { style } from './style';
import { Header } from '../../components/header/Header';
import { Button } from '../../components/button/Button';
import { GoBackButton } from '../../components/GobackButton/GobackButton';

function Registration({navigation})
{
    const [email,setemail] =  useState('');
    const [password,setpassword] = useState('');
    const [fullName,setfullName] = useState('');
    return (
        <SafeAreaView style={[Globalstyle.background,Globalstyle.flex]} >
            <View style={style.BackButton}>
            <GoBackButton onPress={()=>navigation.goBack()} />

            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container} >
                <View style={Globalstyle.marginBottom24}>
                    <Header type={2} title={'Hello and Welcome'} />
                </View>
                <View style={Globalstyle.marginBottom24}>
                <Input
                label={'First & Last Name'}
                 placeholder={'Enter your Full Name'}
                 onChangeText={value=>setfullName(value)}
                  />
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
                <Button title={'Registration'} />
            </View>



            </ScrollView>
        </SafeAreaView>
    );
}
export default Registration
;
