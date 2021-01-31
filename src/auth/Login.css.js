import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: "relative",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F0F4FD"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    inputContainer: {
        display: "flex",
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    signInText: {
        alignSelf: "flex-start",
        marginBottom: "10%",
        fontSize: 35,
        fontWeight: "bold"
    },
    input: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "85%",
        width: "85%",
    },

    signInBtnContainer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#BAFB67",
        height: 50,
        width: 300,
        borderRadius: 10,
        elevation: 3

    },

    signInBtnText: {
        textAlign: "center",
    }
});

export default styles;