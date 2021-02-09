import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    layout: {
        display: "flex",
        flex: 1
    },

    header: {
        flex: 2,
        borderRadius: 50,
        position:'relative'
    },

    content: {
        flex: 7
    },

    footer: {
        flex: 1,
    },

    linearGradient: {
        paddingTop:"10%",
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default styles;