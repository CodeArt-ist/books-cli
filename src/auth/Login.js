import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Login.css'
import i18n from '../config/i18n';
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';
import backgroundImage from '../../assets/background.png'
import Alert from "../../components/Alert/Alert";


const Login = ({navigation}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const {t} = i18n;

    async function login() {
        await setLoading(true)
        try {
            let response = await fetch('http://192.168.1.46:3000/auth/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            let responseJson = await response.json();

            if (responseJson.accessToken) {
                await AsyncStorage.setItem('access', responseJson.accessToken)
                navigation.navigate('HomePage')
            }

            await setLoading(false)

            setErrors(responseJson.message || [])
            console.log(responseJson)


        } catch (error) {
            setLoading(false)
            setErrors(error.message || [])
        }
    }

    const RenderErrors = () => {
        if (errors) {
            if (typeof errors === "object" && errors.length > 0) {
                return <Alert type={"error"}>{errors[0]}</Alert>
            }else if (typeof errors === "string") {
                return <Alert type={"error"}>{errors}</Alert>
            }
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.image}/>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <View style={{width: "100%"}}>
                        <Text style={styles.signInText}>{t('login.headerTitle')}</Text>
                        <RenderErrors/>
                    </View>

                    <View style={{width: "100%"}}>
                        <Input onChange={e => setEmail(e)} valid={false} label={t('login.email')}
                               placeholder={"example@mail.com"}/>
                        <Input type={"password"} onChange={e => setPassword(e)} valid={true} label={t('login.password')}
                               placeholder={"******"}/>
                    </View>

                    <View style={{width: 100, display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Button loading={loading} title={t('login.signIn')} onPress={() => login()}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;