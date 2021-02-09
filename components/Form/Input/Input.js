import React, {useState} from "react";
import {View, TextInput, Text} from "react-native";
import styles from './input.css'
import {validColor, invalidColor} from "../../../src/config/language/colors";

const Input = ({placeholder, label, onChange, type, value, style= {},options}) => {

    const [valid, setValid] = useState(false)

    const onInputChange = (e) => {
        if (typeof options === "object") {
            setValid(!!options.test(e))
        } else if (typeof options === 'string') {
            let validation = options.split(':');
            let name = validation[0]
            let value = validation[1].split(',')[0]
            let process = validation[1].split(',')[1]

            let fn = window[process];

            let parameter;
            if  (typeof fn === 'function') {
                parameter = fn(e)
            }else {
                try {
                    parameter = e[process]
                } catch (error) {
                    parameter = e;
                }
            }

            setValid(validations(name,value,parameter))
        }

        return onChange(e);
    }

    const validations = (name, value, parameter) => {
        switch (name) {
            case 'bigger_than' :
                return parameter > value
        }
    }

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput secureTextEntry={type === "password" ?? false}
                       passwordRules={valid}
                       onChangeText={e => onInputChange(e)}
                       placeholder={placeholder}
                       value={value}
                       style={{...styles.input, borderBottomColor: valid ? validColor : invalidColor, ...style }}/>
        </View>
    )
}

export default Input;