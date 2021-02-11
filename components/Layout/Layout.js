import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from "@expo/vector-icons";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import SearchInput from "../Form/Input/SearchInput";
import styles from './layout.css'


const Layout = React.memo(({children, title, back, search, style={}}) => {

    const [searchText, setSearchText] = useState()

    return (
        <KeyboardAwareScrollView style={{...styles.layout, ...style}}>
            <View style={styles.header}>

                <LinearGradient
                    colors={['rgba(254,182,101,1)', 'rgba(246,110,180,1)']}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.linearGradient}>

                    <View style={styles.title}>
                        {back && <Ionicons style={styles.back} name={'arrow-back-outline'} color={"#fff"} size={32}/>}
                        <Text style={styles.titleText}>{title}</Text>
                    </View>

                </LinearGradient>

                {search && <SearchInput style={styles.search}
                              onChange={e => setSearchText(e)}
                              value={searchText}
                              placeholder={"Search Book"}/>}
            </View>


            <View style={styles.content}>
                {children}
            </View>

        </KeyboardAwareScrollView>
    )
})

export default Layout;

