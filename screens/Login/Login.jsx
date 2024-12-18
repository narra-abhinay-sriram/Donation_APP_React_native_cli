import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Globalstyle } from '../../assets/styles/Globalstyle';
import Input from '../../components/Input/Input';
import { style } from './style';
import { Header } from '../../components/header/Header';
import { Button } from '../../components/button/Button';
import { loginUser } from '../../api/api';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/user';

function Login({navigation})
{
    const [email,setemail] =  useState('');
    const [password,setpassword] = useState('');
    const [updateLogin,setUpdateLogin] = useState('');
    const [isloading,setisloading] = useState(false);
    const dispatch = useDispatch();
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
            {updateLogin && <Text style={style.update}>{updateLogin}</Text>}
            <View >
                <Button
                title={'Login'}
                isDisabled={email.length <= 8 || password.length <= 6 || isloading}
                 onPress={async()=>{
                    setisloading(true);
                    const response = await  loginUser(email,password);
                    if(!response.status)
                    {
                          setUpdateLogin(response.error);
                          setisloading(false);
                    }
                    else{
                        setUpdateLogin('');
                        setisloading(false);
                        dispatch(login(response.data));
                        navigation.navigate('home');

                    }
                 }} />
            </View>
            <Pressable style={style.pressabel} onPress={()=>navigation.navigate('register')}>
                <Header title={'Dont have an account?'} type={3} color={'#156CF7'} />
            </Pressable>


            </ScrollView>
        </SafeAreaView>
    );
}
export default Login;
