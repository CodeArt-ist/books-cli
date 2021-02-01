import React from "react";
import styles from "./button.css";
import {ActivityIndicator, Text, TouchableOpacity} from "react-native";

const Button = ({title,onPress,loading}) => {
    return (
        <TouchableOpacity style={styles.signInBtnContainer} onPress={()=>onPress()}>
            { loading
                ? <ActivityIndicator color={"#445984"}/>
                : <Text style={styles.signInBtnText}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default Button;