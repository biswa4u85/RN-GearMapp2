import React from 'react'
import { StackNavigator } from 'react-navigation';
import { StyleSheet, ImageBackground, TouchableOpacity, Image, Icon } from 'react-native';
import Login from './Login'
import Dash from './Dash'
import headerBG from './images/header.png';
import logo from './images/logo.png';
import back from './images/back.png';

export const Nav = StackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    dash: {
        screen: Dash
    },
},
    {
        initialRouteName: 'login',
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: styles.headerLable,
            title: <Image source={logo} />,
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image source={back} />
            </TouchableOpacity>
        })
    });


const styles = StyleSheet.create({
    headerLableNone: {
        backgroundColor: '#ffffff',
        position: "absolute",
        top: 0,
        left: 10
    },
    headerLable: {
        backgroundColor: '#31bfda',
        paddingLeft: 10,
        paddingRight: 10
    }
})