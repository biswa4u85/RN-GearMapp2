import React from 'react'
import { StackNavigator } from 'react-navigation';
import Login from './Login'
import Dash from './Dash'


export const Nav = StackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    dash: {
        screen: Dash,
        navigationOptions: {
            header: null
        }
    },
},
    {
        initialRouteName: 'dash'
    });