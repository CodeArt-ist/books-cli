import { StyleSheet } from 'react-native';

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
        flex:1,
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    input: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "85%",
        width: "85%",
        backgroundColor: "white"
    }
});

export default styles;