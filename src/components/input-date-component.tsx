import { CommonStyles } from '@src/common/styles';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker';

interface Props {
    value: Date,
    id:string,
    onChange: (id: string, value: Date) => void,
    placeHolder:string

}
export default function InputDateComponent(props:Props) {
    const {value,onChange,id,placeHolder}=props
    const [isOpen,setIsOpen]=useState(false);
    return (
        <View style={CommonStyles.inputContainer}>
             <TouchableOpacity
                style={[CommonStyles.input]}
                onPress={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <Text style={[ CommonStyles.inputText,!value&&CommonStyles.inputTextPlaceHolder,{marginVertical:4}]} >{value? value.toDateString():placeHolder}</Text>
            </TouchableOpacity>
            <View style={{alignItems:'center'}}>
            {isOpen&&
               <DatePicker
               mode='date'
                minimumDate={new Date()}
               style={{alignSelf:'center',marginTop:8,elevation:0,}}
               androidVariant="nativeAndroid"
               date={value||new Date()}
               onDateChange={(date) => { 
                   onChange(id, date);
                }}
           />}
            </View>
           
        </View>
    )
}
