import { StyleSheet } from 'react-native';

StyleSheet.create({
    layout: {
        display: "flex",
        height:"100%",
        flex:4
    },

    header: {
        flex:1,
        backgroundColor: "red"
    },

    content: {
        flex:2,
        backgroundColor: "blue",
    },

    footer: {
        flex:1,
        backgroundColor: "green",
    }
});