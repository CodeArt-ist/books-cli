import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

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
        paddingLeft: 23,
        paddingRight: 23,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
        borderBottomWidth: 5,
        marginBottom: 23
    },

    searchContainer: {
        position: "relative",
        display: "flex",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        top: Height * 0.15,
    },

    searchInput: {
        maxWidth: Width * 0.9,
        marginBottom: 0,
        padding: 0,
        borderBottomWidth: 0,
    },

    searchResult: {
        maxWidth: Width * 0.9,
        width: Width,
        padding: 15,
        fontSize: 17,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    }
});

export default styles;