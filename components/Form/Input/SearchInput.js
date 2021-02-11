import React, {useState} from "react";
import {TextInput, View, Text} from "react-native";
import styles from "./input.css";

const SearchInput = ({value, placeholder, onChange, style}) => {

    const [results, setResult] = useState([
        {id: 1, name: "Ali baba ve kırk haramiler"},
        {id: 2, name: "Alice Harikalar Diyarında"},
        {id: 3, name: "Körlük"},
        {id: 4, name: "Midos Kartalının Gözleri"},
    ])

    const [searchTerm, setSearchTerm] = useState()

    const onSearchInputChange = (e) => {
        setSearchTerm(e);
        return onChange(e)
    }

    const RenderResults = () => {
        if (searchTerm && searchTerm.length > 0) {
            return results.map((e, i) => {
                if (e.name.includes(searchTerm)){
                    return <Text key={i} style={styles.searchResult}>{e.name}</Text>
                }
            })
        }

        return null;

    }

    return (
        <View style={styles.searchContainer}>
            <TextInput style={{...styles.input, ...styles.searchInput, ...style}}
                       placeholder={placeholder}
                       onChangeText={e => onSearchInputChange(e)}
                       value={value}/>
            <View>
                <RenderResults/>
            </View>
        </View>
    )
}

export default SearchInput;