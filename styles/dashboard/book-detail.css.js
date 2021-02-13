import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
  },

  image: {
    marginTop: -Dimensions.get('window').height * 0.05,
    marginLeft: -Dimensions.get('window').height * 0.03,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },

  bookInformation: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: 190,
    marginLeft: -20,
  },

  bookTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#384F7D'
  },

  bookAuthor: {
    fontSize: 17,
    fontWeight: 'normal',
    color: '#384F7D',
  },

  descriptionContainer: {
    padding: 10,
    textAlign: 'center'
  },

  htmlStyle: {
    letterSpacing: 0,
    color: '#384F7D',
    lineHeight: 20
  },

  addButton: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },

});

export default styles;