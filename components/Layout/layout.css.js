import {StyleSheet} from "react-native";
import {Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    layout: {
        display: "flex",
        flex: 1,
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
        marginTop: windowHeight*0.02,
        marginBottom:10,
        flex:1
    },

    linearGradient: {
        position:"relative",
        flexWrap:"nowrap",
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        height: windowHeight*0.18
    },

    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative"
    },

    back: {
        marginLeft: 10
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