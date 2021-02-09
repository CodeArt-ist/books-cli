import {StyleSheet} from "react-native";
import {Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

    search: {
        marginTop: -windowHeight * 0.04,
        alignSelf: "center",
        width: windowWidth * 0.9
    },

    content: {
        flex: 7
    },

    footer: {
        flex: 1,
    },

    linearGradient: {
        paddingTop: windowHeight * 0.07,
        paddingLeft: windowHeight * 0.04,
        paddingRight: windowHeight * 0.04,
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
        left: -10,
        top: 0
    },

    titleText: {
        flex: 7,
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