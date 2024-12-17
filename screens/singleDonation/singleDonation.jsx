import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Globalstyle } from "../../assets/styles/Globalstyle";
import { GoBackButton } from "../../components/GobackButton/GobackButton";
import { SafeAreaView } from "react-native";
import { style } from "./style";

export const Singledonation = ({navigation})=>{
    const donation = useSelector(store => store.donation);
    return (
        <SafeAreaView style={[Globalstyle.background,Globalstyle.flex]}>
            <ScrollView  showsVerticalScrollIndicator={false} style={style.container} >
          <GoBackButton onPress={()=>navigation.goBack()} />
        </ScrollView>
        </SafeAreaView>

    );
};
