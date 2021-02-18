import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },

  textarea: {
    textAlignVertical: 'top',  // hack android
    width: Dimensions.get('window').width * 0.95,
    fontSize: 14,
    color: '#333',
  },

  notYetContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

  thumbnail: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  cover: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default styles;