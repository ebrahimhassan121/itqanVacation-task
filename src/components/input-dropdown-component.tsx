import { CommonStyles } from '@src/common/styles';
import { departments } from '@src/common/constants';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
    id: string,
    value: string,
    placeHolder: string,
    handleFocus: (id: string, value: boolean) => void,
    error: string | undefined,
    touched: boolean,
    onChangeText: (id: string, value: string) => void


}
export default function InputDropDownComponent(props: Props) {
    const { error, touched, placeHolder, value, onChangeText, handleFocus, id, } = props;
    const [isOpen, setIsOpen] = useState(false);
    const data = departments
    return (
        <View style={CommonStyles.inputContainer}>
            <TouchableOpacity
                style={[CommonStyles.input, touched && error ? CommonStyles.inputError : undefined]}
                onPress={() => {
                    handleFocus(id, true);
                    setIsOpen(!isOpen);
                }}
            >
                <Text style={[value ? CommonStyles.inputText : CommonStyles.inputTextPlaceHolder,{marginVertical:4}]} >{value || placeHolder}</Text>
            </TouchableOpacity>
            {isOpen && <View style={styles.dropMenuContainer}>
                {data.map((e, i) => (
                    <TouchableOpacity
                        style={[styles.dropMenuItem, { borderBottomWidth: i == data.length - 1 ? 0 : 1, }]}
                        onPress={() => {
                            onChangeText(id, e);
                            setIsOpen(false)
                        }} >
                        <Text >{e}</Text>
                    </TouchableOpacity>
                ))}
            </View>}

            {touched && error && <Text style={{ marginHorizontal: 8, marginTop: 4, fontSize: 12, color: "red" }}>{touched && error}</Text>}

        </View>
    )
}
const styles = StyleSheet.create({
    dropMenuContainer: {
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 4,
        backgroundColor: "#fff",
        borderColor: "#ddd"
    },
    dropMenuItem: {
        padding: 8,
        borderColor: "#ddd"

    }
})