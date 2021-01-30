import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Layout from '../../components/Layout/Layout';
import { Input } from "react-native-elements";
import styles from './Login.css'
import i18n from '../config/i18n';



const Login = () => {
    

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.image}></ImageBackground>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                   <Input label={i18n.t('welcome.title')}>
                   </Input>
                </View>
            </View>
        </View>
    )
}

export default Login;