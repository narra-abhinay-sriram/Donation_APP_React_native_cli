import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Pressable, View } from "react-native";
import { style } from "./style";

export const GoBackButton = (props)=>{
    return (
        <Pressable onPress={()=>props.onPress()} style={style.container}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Pressable>
    );
};
