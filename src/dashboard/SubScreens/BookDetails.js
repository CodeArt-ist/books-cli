import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/Layout/Layout';
import { selfLinkAsync } from '../../store/reducers/bookReducer';

const BookDetails = ({ route, navigation }) => {

  const state = useSelector(state => state.book);
  const dispatch = useDispatch();

  useEffect(() => {

    const boostrapAsync = async () => {
      if (route.params?.selfLink) {
        dispatch(await selfLinkAsync(route.params.selfLink));
      } else {
        await navigation.pop();
      }
    };

    boostrapAsync();

  }, []);

  return (
    <Layout navigation={navigation} back loading={state.loading}
            title={state.loading ? null : state.self.volumeInfo.title}>
      {
        state.loading
          ? <ActivityIndicator />
          : <>
            <Image
              style={styles.image}
              source={{
                uri: state.self.volumeInfo.imageLinks?.small,
              }}
            />
          </>
      }
    </Layout>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  image: {
    marginTop: -Dimensions.get('window').height * 0.05,
    marginLeft: -Dimensions.get('window').height * 0.05,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});