import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import AboutPhone from './Settings/AboutPhone';
import SettingHome from './Setting';
import CameraScan from './Settings/CameraScan'

export default class App extends Component{
 
render(){
  return(
    <AppStackNavigator/>
        );
      }
}

const AppStackNavigator =  createStackNavigator({
  HomePage: SettingHome,
  AboutPage: AboutPhone,
  CameraPage: CameraScan,
})