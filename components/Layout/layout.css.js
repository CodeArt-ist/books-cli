import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    layout: {
        display: "flex",
        flex: 1
    },

    header: {
        flex: 2,
        borderRadius: 50,
        position: 'relative'
    },

    content: {
        flex: 7
    },

    footer: {
        flex: 1,
    },

    linearGradient: {
        paddingTop: '10%',
        paddingLeft: '7%',
        paddingRight: '7%',
        flex: 1,
    },

    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative"
    },

    back: {
        position: "absolute",
        left:-10,
        top: 0
    },

    titleText: {
        flex:7,
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
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