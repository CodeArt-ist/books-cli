import {createSlice} from "@reduxjs/toolkit";
import {Post} from "../../config/services/api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
    name: "authReducer",
    initialState: {
        isLoading: true,
        userToken: null,
        isSignOut: false,
        errors: []
    },
    reducers: {
        login(state, action) {
            state.isLoading = false;
            state.userToken = action.payload.userToken;
            state.errors = action.payload.message ?? []
        },
        register(state, action) {
            state.isLoading = false;
            state.userToken = action.payload.userToken;
            state.errors = action.payload.message
        },
        logout(state, action) {
            state.token = null;
        },
        setToken(state, action) {
            state.userToken = action.payload
            state.isLoading = false
        }
    }
});

export const {login, register, logout, setToken} = authSlice.actions;
export default authSlice.reducer;

export const loginAsync = (email, password) => async dispatch => {
    await Post('http://192.168.1.5:3000/auth/login', {email, password}, async (response, error) => {
        if (response) {
            if (response.accessToken) {
                dispatch(login({userToken: response.accessToken}))
                await AsyncStorage.setItem('token', response.accessToken)
            }
            if (response.error) {
                dispatch(login(response))
            }
        } else if (error) {
            console.log("ERRRRROOOOOOORR",error)
        }
    })
}

export const setTokenAsync = (token) => async dispatch => {
    await dispatch(setToken(token))
}
