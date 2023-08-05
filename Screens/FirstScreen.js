import { View } from "react-native";
import * as React from 'react';
import PrimaryButton from "../components/PrimaryButton";
import PlayRandomButton from "../components/PlayRandomButton";
function FirstScreen(props){
    return (
        <View>
            <PlayRandomButton onPress = {props.onPressRandomButton}>Random</PlayRandomButton>
            <PrimaryButton onPress = {props.onPressList}>Lista</PrimaryButton>
        </View>
    );
}
export default FirstScreen