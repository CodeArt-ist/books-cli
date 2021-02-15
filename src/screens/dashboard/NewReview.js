import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Textarea from 'react-native-textarea';
import Layout from '../../../components/Layout/Layout';
import { invalidColor } from '../../../styles/colors';

const NewReview = ({ navigation, route }) => {

  const [title, setTitle] = useState();
  const [uri, setUri] = useState();
  const [review, setReview] = useState();


  useEffect(() => {
    if (route.params?.book) {
      const book = route.params.book.volumeInfo;
      setTitle(book.title);
      setUri(book.imageLinks.thumbnail);
    }
  }, [route]);

  return (
    <Layout navigation={navigation} title={title}>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: uri ? uri : null }}
               style={{ width: 150, height: 200, resizeMode: 'contain', marginBottom: 20 }} />
        <View style={styles.container}>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={(e) => setReview(e)}
            defaultValue={review}
            maxLength={350}
            placeholder={'write your review'}
            placeholderTextColor={invalidColor}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </View>
    </Layout>
  );
};

export default NewReview;

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
});