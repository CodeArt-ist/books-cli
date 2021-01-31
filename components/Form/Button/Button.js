import React from "react";
import styles from "./button.css";
import {Text, TouchableOpacity} from "react-native";

const Button = ({title,onPress}) => {
    return (
        <TouchableOpacity style={styles.signInBtnContainer} onPress={()=>onPress()}>
            <Text style={styles.signInBtnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;