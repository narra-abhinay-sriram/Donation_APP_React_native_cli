import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Globalstyle } from "../../assets/styles/Globalstyle";

function Home(){
    return (
<SafeAreaView style={[Globalstyle.background,Globalstyle.flex]}>
    <View>
       <Text>
        home screen
       </Text>
    </View>
</SafeAreaView>
    );

}

export default Home;
