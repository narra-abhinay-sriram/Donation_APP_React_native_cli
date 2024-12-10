import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Globalstyle } from "../../assets/styles/Globalstyle";
import { Header } from "../../components/header/Header";
import { Tab } from "../../components/tab/Tab";
import { Badge } from "../../components/badge/Badge";
import { Search } from "../../components/search/Search";


function Home(){
    return (
<SafeAreaView style={[Globalstyle.background,Globalstyle.flex]}>
    <View>
       <Search onSearch={()=>{}}/>

    </View>
</SafeAreaView>
    );

}

export default Home;
