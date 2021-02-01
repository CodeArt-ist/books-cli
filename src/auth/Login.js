import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Login.css'
import i18n from '../config/i18n';
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import dismissKeyboard from "react-native-web/dist/modules/dismissKeyboard";


const Login = ({navigation}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const {t} = i18n;

    const login = () => {
        setLoading(true)
        return fetch('http://192.168.1.46:3000/auth/login', {
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
                if (responseJson.accessToken) {
                    navigation.navigate("HomePage");
                }
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                alert(JSON.stringify(error.status))
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