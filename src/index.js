import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './auth/Login'
import Register from './auth/Register';
import Home from './dashboard/Home'
import Search from './dashboard/Search'
import NewReview from './dashboard/NewReview'
import ReviewList from './dashboard/ReviewList'
import Profile from './dashboard/Profile'
import {Ionicons} from '@expo/vector-icons'
import i18n from './config/language/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from "./auth/Splash";
import {useDispatch, useSelector} from "react-redux";
import {setTokenAsync} from "./store/reducers/authReducer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Index = () => {

    const state = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const boostrapAsync = async () => {
            let userToken = await AsyncStorage.getItem('token')

            await dispatch(await setTokenAsync(userToken));
        }

        boostrapAsync()
    })

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                {state.isLoading && <Stack.Screen name={'Splash'} component={Splash}/>}

                {
                    state.userToken
                        ?
                        <>
                            <Stack.Screen name={'HomePage'} component={MainTabNavigator}/>
                        </>
                        :
                        <>
                            <Stack.Screen name={'Login'} component={Login}/>
                            <Stack.Screen name={'Register'} component={Register}/>
                        </>
                }
            </Stack.Navigator>
        </NavigationContainer>

    );
}

function MainTabNavigator() {

    const {t} = i18n;

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#384F7D',
                inactiveTintColor: '#A5B0C4',
                style: {
                    backgroundColor: '#ffffff'
                }
            }}>

            <Tab.Screen name={t('dashboard.homepage')} component={Home}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name={'ios-home'} color={color} size={size}/>
                            ),
                        }}/>
            <Tab.Screen name={t('dashboard.search')} component={Search}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name={'search-outline'} color={color} size={size}/>
                            ),
                        }}/>
            <Tab.Screen name={t('dashboard.new')} component={NewReview}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name={'add-outline'} color={color} size={size}/>
                            ),
                        }}/>
            <Tab.Screen name={t('dashboard.reviews')} component={ReviewList}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name={'bulb-outline'} color={color} size={size}/>
                            ),
                        }}/>
            <Tab.Screen name={t('dashboard.profile')} component={Profile}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name={'person-outline'} color={color} size={size}/>
                            ),
                        }}/>
        </Tab.Navigator>
    )
}

export default Index;

