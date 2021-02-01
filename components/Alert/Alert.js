import React from "react";
import {Text} from "react-native";
import styles from './alert.css'

const Alert = ({children,type}) => {

    let alertType = {...styles.alert }

    if (type) {
        alertType = {...alertType,...styles[type]}
    } else {
        alertType = {...alertType,...styles["error"]}
    }

    return (
        <Text style={alertType}>{children}</Text>
    )
}

export default Alert;
