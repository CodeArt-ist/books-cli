import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './Login.css'
import i18n from '../config/language/i18n';
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import backgroundImage from '../../assets/background.png'
import Alert from "../../components/Alert/Alert";
import {useDispatch, useSelector} from "react-redux";
import {loginAsync} from "../store/reducers/authReducer";

const Login = ({navigation}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const {t} = i18n;

    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const loginFunc = async () => {
        await setLoading(true)
        dispatch(await loginAsync(email, password))
        await setErrors(state.errors)
        await setLoading(false)
    }

    const RenderErrors = () => {
        if (errors) {
            if (typeof errors === "object" && errors.length > 0) {
                return <Alert type={"error"}>{errors[0]}</Alert>
            } else if (typeof errors === "string") {
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
                    <View style={styles.w100}>
                        <Text style={styles.signInText}>{t('login.headerTitle')}</Text>
                        <RenderErrors/>
                    </View>

                    <View style={styles.w100}>
                        <Input onChange={e => setEmail(e)} label={t('login.email')}
                               value={email}
                               placeholder={"example@mail.com"} options={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}/>
                        <Input type={"password"} onChange={e => setPassword(e)} label={t('login.password')}
                               options={'bigger_than:5,length'}
                               value={password}
                               placeholder={"******"}/>
                    </View>

                    <View style={styles.buttonCover}>
                        <Button loading={loading} title={t('login.signIn')} onPress={() => loginFunc()}/>
                        <View style={styles.registerTextWrapper}>
                            <Text style={styles.registerText}>New here ? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={{...styles["registerText"], ...styles.underlineText}}>
                                    Create an account
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login;