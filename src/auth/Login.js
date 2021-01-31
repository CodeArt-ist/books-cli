import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Login.css'
import i18n from '../config/i18n';
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";


const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const {t} = i18n;

    const login = () => {
        console.log({credentials: {password,email}})
        return fetch('http://192.168.1.100:3000/auth/login',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.image}/>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <View style={{width: "100%"}}>
                        <Text style={styles.signInText}>{t('login.headerTitle')}</Text>
                    </View>

                    <View style={{width: "100%"}}>
                        <Input onChange={e => setEmail(e)} valid={false} label={t('login.email')}
                               placeholder={"example@mail.com"}/>
                        <Input onChange={e => setPassword(e)} valid={true} label={t('login.password')}
                               placeholder={"******"}/>
                    </View>

                    <View style={{width: 100, display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Button title={t('login.signIn')} onPress={() => login()}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;