import React from "react";
import {View, TextInput, Text} from "react-native";
import styles from './input.css'
import {validColor, invalidColor} from "../../../src/config/language/colors";

const Input = ({placeholder, valid, label, onChange, type, value}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput secureTextEntry={type === "password" ?? false} passwordRules={valid}
                       onChangeText={e => onChange(e)}
                       placeholder={placeholder}
                       value={value}
                       style={{...styles.input, borderBottomColor: valid ? validColor : invalidColor}}/>
        </View>
    )
}

export default Input;