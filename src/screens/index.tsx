import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator();

const AppContainer=()=>{
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='add-vacation'>
                <Stack.Screen
                 name='add-vacation'
                 component={require('@src/screens/add-vacation').default}
                options={({navigation})=>({
                   headerTitle:"Add Vacation",
                   headerRight:()=><TouchableOpacity style={{padding:8}} onPress={()=>{navigation.push("list-vacations")}} ><Text>View All</Text></TouchableOpacity>
                   })}
                />
                    <Stack.Screen
                 name='list-vacations'
                 component={require('@src/screens/list-vacations').default}
                 options={{
                    headerTitle:"Vacations",
                 }}
                
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppContainer