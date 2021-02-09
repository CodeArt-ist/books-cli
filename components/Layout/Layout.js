import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import styles from './layout.css'

const Layout = ({ children, title,back }) => {

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <LinearGradient
                    colors={['rgba(254,182,101,1)', 'rgba(246,110,180,1)']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.linearGradient}>
                    <View style={styles.title}>
                        {back && <Text>BACK</Text>}
                        <Text>{title}</Text>
                    </View>
                </LinearGradient>
            </View>

            <View style={styles.content}>
                {children}
            </View>

            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </SafeAreaView>
    )
}

export default Layout;

