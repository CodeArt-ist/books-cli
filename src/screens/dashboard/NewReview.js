import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Textarea from 'react-native-textarea';
import Layout from '../../../components/Layout/Layout';
import { invalidColor } from '../../../styles/colors';
import i18n from '../../config/language/i18n';
import styles from '../../../styles/dashboard/new-review.css';
import Button from '../../../components/Form/Button/Button';

const NewReview = ({ navigation, route }) => {

  const [title, setTitle] = useState();
  const [uri, setUri] = useState();
  const [review, setReview] = useState();
  const [loading, setLoading] = useState(false);

  // translate
  const { t } = i18n;

  const saveReview = async () => {
    console.log('here')
    await setLoading(true)
    await setTimeout(() => {
      setLoading(false)
    },3000)
  }

  const Render = useCallback(() => {

    if (!title && !uri) {
      return (
        <View style={styles.notYetContainer}>
          <Text>{t('newReview.not_yet')}</Text>
        </View>
      );
    } else {
      return (
        <>
          <Image source={{ uri: uri ? uri : null }}
                 style={styles.thumbnail} />
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
          <Button title={'Add Review'}
                  onPress={() => saveReview()}
                  loading={loading} />
        </>
      );
    }
  });

  useEffect(() => {
    if (route.params?.book) {
      const book = route.params.book.volumeInfo;
      setTitle(book.title);
      setUri(book.imageLinks.thumbnail);
    }
  }, []);

  return (
    <Layout navigation={navigation} search={!title} title={title}>
      <View style={styles.cover}>
        <Render />
      </View>
    </Layout>
  );
};

export default NewReview;
