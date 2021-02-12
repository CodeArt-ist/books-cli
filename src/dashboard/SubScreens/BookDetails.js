import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Text } from 'react-native';
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
    <Layout loading={state.loading} title={state.loading ? null : state.self.volumeInfo.title}>
      {
        state.loading ? <ActivityIndicator />
          :
          <>
            <Text>{ state.self.volumeInfo.description} </Text>
            <Image source={state.self.volumeInfo.imageLinks.large} />
          </>
      }
    </Layout>
  );
};

export default BookDetails;