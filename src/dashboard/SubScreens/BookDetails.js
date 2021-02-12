import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/Layout/Layout';
import { selfLinkAsync } from '../../store/reducers/bookReducer';

const BookDetails = ({ route, navigation }) => {

  const state = useSelector(state => state.book);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(selfLinkAsync(route.params.selfLink));

  }, []);

  return (
    <Layout back loading={state.loading} title={state.loading ? null : state.self.volumeInfo.title}>
      {
        state.loading ? <ActivityIndicator />
          :
          <>
            <Image
              style={styles.image}
              source={{
                uri: state.self.volumeInfo.imageLinks.large,
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
    resizeMode: "contain"
  }
});