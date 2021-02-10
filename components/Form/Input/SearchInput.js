import React from "react";
import {TextInput, View} from "react-native";
import styles from "./input.css";

const SearchInput = ({value, placeholder, onChange, style}) => {

    const onSearchInputChange = (e) => {
        return onChange(e)
    }

    return (
        <View style={styles.searchContainer}>
            <TextInput style={{...styles.input, ...styles.searchInput, ...style}}
                       placeholder={placeholder}
                       onChangeText={e => onSearchInputChange(e)}
                       value={value}/>
            <View>
                {/*<Text style={styles.searchResult}>Result 1</Text>*/}
            </View>
        </View>
    )
}

export default SearchInput;