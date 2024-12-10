import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {width,height} = Dimensions.get('window');

const ismall = width <= 355 && DeviceInfo.hasNotch();

const guidelinebasewidth = ()=>{
    if(ismall)
    {
        return 300;
    }
    return 350;
};

const guidelinebaseheight = ()=>{
    if(ismall)
    {
        return 550;
    }
    else if(width > 410)
    {
        return 660;
    }
    return 680;
};

const guidelinefontsize = ()=>{
    if(width > 410)
    {
        return 430;
    }
    return 400;
};

const horizontalScale = (size)=> (width / guidelinebasewidth()) * size;
const verticalScale = (size)=> (height / guidelinebaseheight()) * size;
const fontScaling = (size)=> (height / guidelinefontsize()) * size;

export {horizontalScale, verticalScale, fontScaling};

