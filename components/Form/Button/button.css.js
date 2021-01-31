import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default styles;