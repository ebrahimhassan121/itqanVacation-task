
import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'


interface Props{
    onPress:()=>void,
    title:String
}
export default function MainButton(props:Props) {
    const {title,onPress}=props
    return (
        <TouchableOpacity onPress={onPress}  style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    button:{
        padding:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#000",
        borderRadius:20,
        marginVertical:8
    },
    text:{
        fontSize:22,
        color:"#ffff"
    }
})