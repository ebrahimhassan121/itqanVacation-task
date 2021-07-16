import InputComponent from '@src/components/input-component';
import InputDropDownComponent from '@src/components/input-dropdown-component';
import MainButton from '@src/components/main-button';
import store from '@src/redux';
import { AddVacationAction } from '@src/redux/vacations/actions';
import { Ivacation } from '@src/redux/vacations/types';
import { Formik } from 'formik'
import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import * as yup from 'yup';
import InputDateComponent from '@src/components/input-date-component';
import { StackNavigationProp } from '@react-navigation/stack';


interface Props{
    navigation:StackNavigationProp<any>
}
export default function AddVacation(props:Props) {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
            <Formik
                initialValues={{
                    name: "",
                    department_name: "",
                    phone: "",
                    start_date: "",
                    requested_days: ""
                }}
                validationSchema={yup.object().shape({
                    name: yup.string().max(30, "Max Field length 30").required("Field is required"),
                    department_name: yup.string().required("Field is required"),
                    start_date: yup.date().required("Field is required"),
                    requested_days: yup.number().min(1, "minimum number of days is 1").required("Field is required")
                })}
                onSubmit={(values) => {
                    const _vacation: Ivacation = {
                        name: values.name,
                        department_name: values.department_name,
                        start_date: values.start_date,
                        requested_days: Number(values.requested_days),
                        phone: values.phone
                    }
                    store.dispatch(AddVacationAction(_vacation))
                    props.navigation.push("list-vacations")
                }}
            >
                {({
                    values,
                    handleChange,
                    errors,
                    setFieldTouched,
                    touched,
                    setFieldValue,
                    isValid,
                    handleSubmit,
                }) => {
                    return <View style={{ width: "90%", }}>
                        <InputComponent
                            id="name"
                            error={errors.name}
                            handleFocus={setFieldTouched}
                            onChangeText={setFieldValue}
                            placeHolder="Name"
                            touched={touched.name ? true : false}
                            value={values.name}
                            keyboardType='default'
                        />
                        <InputDropDownComponent
                            id="department_name"
                            error={errors.department_name}
                            handleFocus={setFieldTouched}
                            onChangeText={setFieldValue}
                            placeHolder="Department Name"
                            touched={touched.department_name ? true : false}
                            value={values.department_name}
                        />


                        <InputComponent
                            id="phone"
                            error={errors.phone}
                            handleFocus={setFieldTouched}
                            onChangeText={setFieldValue}
                            placeHolder="Phone Number"
                            touched={touched.phone ? true : false}
                            value={values.phone}
                            keyboardType='phone-pad'

                        />
                        <InputDateComponent id='start_date' placeHolder="Start Date" value={values.start_date} onChange={setFieldValue} />

                        <InputComponent
                            id="requested_days"
                            error={errors.requested_days}
                            handleFocus={setFieldTouched}
                            onChangeText={setFieldValue}
                            placeHolder="Requested Days"
                            touched={touched.requested_days ? true : false}
                            value={values.requested_days}
                            keyboardType='number-pad'

                        />
                        <MainButton title="Add Vacation" onPress={handleSubmit} />

                    </View>

                }}
            </Formik>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        minHeight: Dimensions.get('window').height * 0.6,
        justifyContent: 'center', alignItems: 'center', paddingTop: 20
    }
})