import { View, Text, Pressable, StyleSheet, Image } from "react-native"

function PlayRandomButton(props){
 return (
    <View style={styles.wrapper}>
        <View style={styles.butonOutherContainer}>
            <Pressable onPress={props.onPress} android_ripple={{color: '#490427'}} style={styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>PRIČAM JA!</Text>
            </Pressable> 
        </View>
    </View>
  
 )
}
const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    butonOutherContainer: {
        borderRadius: 100,
        margin: 4,
        marginTop: 40,
        marginBottom: 15,
        overflow: 'hidden',
        width: "50%",
    },
    buttonInnerContainer: {
        backgroundColor: '#06b6d4',
        paddingVertical: 8,
        paddingHorizontal: 30,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        marginVertical: 20,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    playButton: {
        marginLeft:11,
        width: 100,
        height: 100,
    }
});

export default PlayRandomButton