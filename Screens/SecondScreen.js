import { FlatList, Text, View, StyleSheet } from "react-native";
import * as React from 'react';
import ListItem from "../components/ListItem";
import BackButton from "../components/BackButton";

function SecondScreen(props){
    return (
        <View>
            <View>
                <BackButton onPress = {props.backToFirst}>Back</BackButton>
            </View>
            <View>
                <FlatList data={props.soundlist} renderItem={sound =>{
                   return <ListItem onPress={()=>props.playSound(sound.item.require)}>{sound.item.name}</ListItem>
                }}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
})
export default SecondScreen;