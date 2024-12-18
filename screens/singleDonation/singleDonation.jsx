import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Globalstyle } from "../../assets/styles/Globalstyle";
import { GoBackButton } from "../../components/GobackButton/GobackButton";
import { Image, SafeAreaView, Text, View } from "react-native";
import { style } from "./style";
import { Badge } from "../../components/badge/Badge";
import { Header } from "../../components/header/Header";
import { Button } from "../../components/button/Button";

export const Singledonation = ({navigation,route})=>{
    const donation = useSelector(store => store.donation);
    return (
        <SafeAreaView style={[Globalstyle.background,Globalstyle.flex]}>
            <ScrollView  showsVerticalScrollIndicator={false} style={style.container} >
          <GoBackButton onPress={()=>navigation.goBack()} />
            <Image source={{uri:donation.selectedDonationInformation.image}} style={style.image} />
            <View style={style.badge}>
                <Badge  title={route.params.categoryInfo.name} />
            </View>
            <Header type={2} title={donation.selectedDonationInformation.name} />
            <Text style={style.description}>
                {donation.selectedDonationInformation.description}

            </Text>
        </ScrollView>
        <View style={style.button}>
        <Button title={'Donate'}  />

        </View>
        </SafeAreaView>

    );
};
