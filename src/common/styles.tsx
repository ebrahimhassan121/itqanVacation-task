import { StyleSheet } from "react-native";

export const CommonStyles=StyleSheet.create({
    inputContainer:{marginBottom: 8},
    input:{ borderWidth: 1, borderRadius: 20, padding: 8, },
    inputError:{
        borderColor:"red"
    },
    inputText:{color:"#000",margin:2,},
    inputTextPlaceHolder:{color:"gray"},
})