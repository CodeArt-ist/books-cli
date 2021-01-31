import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        alignItems: "flex-start"
    },
    label: {
        color: "#445984",
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: "bold",
        marginBottom: 7,
    },
    input: {
        backgroundColor: "#fff",
        width: "100%",
        elevation: 4,
        paddingLeft:23,
        paddingRight: 23,
        paddingTop: 15,
        paddingBottom:15,
        borderRadius: 8,
        borderBottomWidth: 5,
        marginBottom: 23
    }
});

export default styles;