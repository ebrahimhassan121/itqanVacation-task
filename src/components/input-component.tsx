import { CommonStyles } from '@src/common/styles';
import React from 'react'
import { View, Text, KeyboardTypeOptions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface Props {
    id: string,
    value: string,
    placeHolder: string,
    handleFocus?: (id: string, value: boolean) => void,
    error?: string,
    touched?:boolean,
    onChangeText: (id: string, value: string) => void,
    keyboardType?:KeyboardTypeOptions|undefined


}
export default function InputComponent(props: Props) {
    const { error,touched,placeHolder, value, onChangeText, handleFocus, id,keyboardType } = props;
    return (
        <View style={CommonStyles.inputContainer}>
            <TextInput
                style={[CommonStyles.input,touched&&error?CommonStyles.inputError:undefined]}
                onChangeText={(value) => { onChangeText(id, value) }}
                onBlur={() => {if(handleFocus) handleFocus(id, true) }}
                value={value}
                placeholder={placeHolder}
                keyboardType={keyboardType}
            />
            {touched&&error && <Text style={{marginHorizontal:8,marginTop:4,fontSize:12,color:"red"}}>{touched&&error}</Text>}
        </View>
    )
}