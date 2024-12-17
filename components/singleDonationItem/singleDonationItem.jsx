import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Badge } from '../badge/Badge';
import { Header } from '../header/Header';
import { style } from './style';

export const SingleDonationItem = (props)=>{
    return (

        <Pressable onPress={()=>props.onPress(props.donationId)}>
            <View>
                <View style={style.badge}>
                <Badge title={props.BadgeTitle} />

                </View>
                <Image resizeMode='cover' source={{uri:props.uri}} style={style.image}  />
            </View>
            <View style={style.donationContainer}>
               <Header title={props.Donationtitle} color={'#0A043C'} type={3} numberoflines={1} />
            <View style={style.priceContainer}>
               <Header title={'$' + props.price.toFixed(2)} type={3} color={'#156CF7'} />

            </View>
            </View>

        </Pressable>
    );
};
