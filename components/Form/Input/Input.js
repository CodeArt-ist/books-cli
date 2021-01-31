import React from "react";
import {View, TextInput, Text} from "react-native";
import styles from './input.css'

const Input = ({placeholder, valid, label, onChange, type}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput secureTextEntry={type==="password" ?? false} passwordRules={valid} onChangeText={e => onChange(e)}
                       placeholder={placeholder}
                       style={{...styles.input, borderBottomColor: valid ? "#BAFB67" : "#445984"}}/>
        </View>
    )
}

export default Input;