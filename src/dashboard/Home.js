import React from 'react';
import { Image, Text, View } from 'react-native';
import Layout from '../../components/Layout/Layout';
import bookMark from '../../assets/icons/bookmark.png';

const Home = () => {

  const books = [];

  const RenderBooks = () => {
    if (books.length > 0) {
      return books.map((e, i) => {
        return <Text key={i}>{e.name}</Text>;
      });
    }

    return (
      <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={bookMark} />
        <Text style={{ textAlign: 'center', maxWidth: '75%', marginTop: 21, fontSize: 18, color: '#384F7D' }}>
          Henüz incelemeniz bulunmuyor.
        </Text>
      </View>
    );
  };


  return (
    <Layout search={true} title={'My Book List'}>
      <RenderBooks />
    </Layout>
  );
};

export default Home;