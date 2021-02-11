import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Layout from '../../components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../store/reducers/authReducer';

const Profile = () => {

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logoutAsync());
  };


  return (
    <Layout back>
      <Text>Profil Sayfası</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Çıkış Yap</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default Profile;