import { View, Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton(props){
 return (
  
    <View style={styles.butonOutherContainer}>
        <Pressable onPress={props.onPress} android_ripple={{color: '#490427'}} style={styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
        </Pressable> 
    </View>
  
 )
}
const styles = StyleSheet.create({
    butonOutherContainer: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#22d3ee',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});

export default PrimaryButton