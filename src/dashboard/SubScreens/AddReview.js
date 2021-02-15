import React, { useEffect } from 'react';
import { View } from 'react-native';
import Layout from '../../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selfLink } from '../../store/reducers/bookReducer';

const AddReview = ({ route, navigation }) => {

  const state = useSelector(state => state.book);
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(selfLink(route.params?.self))

  }, []);

  return (
    <Layout navigation={navigation} back title={'Add Book Review'}>
      <View>

      </View>
    </Layout>
  );
};

export default AddReview;