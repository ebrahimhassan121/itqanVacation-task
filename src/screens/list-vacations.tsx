import InputComponent from '@src/components/input-component'
import store, { AppState } from '@src/redux'
import { DeleteVacationAction } from '@src/redux/vacations/actions'
import { Ivacation } from '@src/redux/vacations/types'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

export default function ListVacations() {
    const vacations = useSelector((state: AppState) => state.VacationsReducer)
    const [searchValue,setSearchValue]=useState("")
    return (
        <View>
            <FlatList
                data={vacations.filter(({name,department_name,phone})=>name.includes(searchValue)||department_name.includes(searchValue)||phone?.includes(searchValue))}
                renderItem={RenderItem}
                keyExtractor={(item, index) => "vacation_" + index}
                contentContainerStyle={{padding:8}}
                ListHeaderComponent={
                    <InputComponent
                        key="search"
                        id="search"
                        placeHolder="search By Name | Department"
                        value={searchValue}
                        onChangeText={(_,value)=>{setSearchValue(value)}}
                    />
                }
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Image source={require('@src/assets/empty-list.png')} resizeMode='contain' style={styles.emptyImage} />
                        <Text style={styles.emptyText}>NO VACATIONS</Text>
                    </View>
                }
            />
        </View>
    )
}

const RenderItem = ({ item, index }: { item: Ivacation, index: number }) => <View style={styles.itemContainer}>

    {getVacationItems(item).map(({ key, value }) => (
        <View style={styles.itemRowContainer}>
            <Text style={styles.keyText}>{key}</Text>
            <Text>{value||"---"}</Text>
        </View>
    ))}
        <TouchableOpacity onPress={()=>{store.dispatch(DeleteVacationAction(index))}} style={styles.delete}>
            <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>



</View>

const getVacationItems = (vacation: Ivacation) => {
    return [
        { key: "Name", value: vacation.name },
        { key: "Department", value: vacation.department_name },
        { key: "Phone", value: vacation.phone },
        { key: "Start Date", value:new Date(vacation.start_date).toDateString() },
        { key: "Requested Days", value: vacation.requested_days },

    ]
}
const styles = StyleSheet.create({
    itemContainer:{ flex: 1, padding: 8, marginBottom: 8, borderWidth: 1,borderColor:"#ccc",borderRadius:20 },
    itemRowContainer: { flexDirection: "row", flex: 1, justifyContent: 'space-between',
     alignItems: 'center',borderBottomWidth:1,borderBottomColor:"#ccc",paddingVertical:4 },
    keyText:{fontWeight:'bold'},
    delete:{
        justifyContent:'center',
        alignItems:'center',
        padding:4,
        paddingHorizontal:16,
        marginTop:8,
        borderRadius:20,
        alignSelf:'flex-end',
        borderWidth:1,
        borderColor:"red"
    },
    deleteText:{
        color:"red"
    },
    emptyContainer:{justifyContent:"center",alignItems:'center',},
    emptyImage:{height:Dimensions.get('screen').height*0.4,},
    emptyText:{color:"gray",marginTop:8}

})