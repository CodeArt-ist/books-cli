import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Home from './screens/dashboard/Home';
import Search from './screens/dashboard/Search';
import NewReview from './screens/dashboard/NewReview';
import ReviewList from './screens/dashboard/ReviewList';
import Profile from './screens/dashboard/Profile';
import { Ionicons } from '@expo/vector-icons';
import i18n from './config/language/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './screens/auth/Splash';
import { useDispatch, useSelector } from 'react-redux';
import { setTokenAsync } from './store/reducers/authReducer';
import BookDetails from './screens/dashboard/SubScreens/BookDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Index = () => {

  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const boostrapAsync = async () => {
      let userToken = await AsyncStorage.getItem('token');

      await dispatch(await setTokenAsync(userToken));
    };

    boostrapAsync();
  });

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {state.isLoading && <Stack.Screen name={'Splash'} component={Splash} />}

        {
          state.userToken
            ?
            <>
              <Stack.Screen name={'HomePage'} component={MainTabNavigator} />
              <Stack.Screen name={'BookDetails'} component={BookDetails} />
            </>
            :
            <>
              <Stack.Screen name={'Login'} component={Login} />
              <Stack.Screen name={'Register'} component={Register} />
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>

  );
};

function MainTabNavigator() {

  const { t } = i18n;

  const tabOptions = {
    activeTintColor: '#384F7D',
    inactiveTintColor: '#A5B0C4',
    keyboardHidesTabBar: true,
    style: {
      backgroundColor: '#ffffff',
      position: 'absolute',
    },
  };

  const screenOptions = {
    'homepage': {
      tabBarIcon: ({ color, size }) => <Ionicons name={'ios-home'} color={color} size={size} />,
    },

    'search': {
      tabBarIcon: ({ color, size }) => <Ionicons name={'search-outline'} color={color} size={size} />,
    },

    'newReview': {
      tabBarIcon: ({ color, size }) => <Ionicons name={'add-outline'} color={color} size={size} />,
    },

    'reviews': {
      tabBarIcon: ({ color, size }) => <Ionicons name={'bulb-outline'} color={color} size={size} />,
    },

    'profile': {
      tabBarIcon: ({ color, size }) => <Ionicons name={'person-outline'} color={color} size={size} />,
    },
  };

  return (
    <Tab.Navigator tabBarOptions={tabOptions}>

      <Tab.Screen name={t('dashboard.homepage')} component={Home} options={screenOptions.homepage} />
      <Tab.Screen name={t('dashboard.search')} component={Search} options={screenOptions.search} />
      <Tab.Screen name={t('dashboard.new')} component={NewReview} options={screenOptions.newReview} />
      <Tab.Screen name={t('dashboard.reviews')} component={ReviewList} options={screenOptions.reviews} />
      <Tab.Screen name={t('dashboard.profile')} component={Profile} options={screenOptions.profile} />

    </Tab.Navigator>
  );
}

export default Index;

