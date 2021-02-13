import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/Layout/Layout';
import { selfLinkAsync } from '../../store/reducers/bookReducer';
import HTML from 'react-native-render-html';
import Button from '../../../components/Form/Button/Button';

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


  const Render = () => {
    if (state.isLoading) {
      return <ActivityIndicator />;
    } else {
      if (state.self) {
        return (
          <View style={{ display: 'flex', justifyContent: 'space-between',height:'100%' }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Image style={styles.image} source={{ uri: state.self?.volumeInfo?.imageLinks?.thumbnail }} />
              <View style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                maxWidth: 190,
                marginLeft: -20,
              }}>

                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: '#384F7D' }}>
                  {state.self?.volumeInfo?.title}
                </Text>
                <Text style={{
                  fontSize: 17,
                  fontWeight: 'normal',
                  color: '#384F7D',
                }}>{state.self.volumeInfo?.authors}</Text>
              </View>


            </View>
            <View style={{ padding: 10, textAlign: 'center' }}>
              <ScrollView>
                {
                  state.self.volumeInfo?.description
                    ?
                    <HTML baseFontStyle={{ letterSpacing: 0, color: '#384F7D', lineHeight: 20 }}
                          source={{ html: state.self.volumeInfo?.description }}
                          contentWidth={Dimensions.get('window').width * 0.7} />
                    : null
                }

              </ScrollView>
            </View>

            <View style={{ display: 'flex', alignItems: 'center',marginBottom:10 }}>
              <Button onPress={() => alert('clicked')} title={'Add Review'}>Deneme</Button>
            </View>
          </View>
        );
      } else {
        return null;
      }
    }
  };


  return (
    <Layout navigation={navigation} back loading={state.loading}
            title={state.self?.volumeInfo?.title}>
      <Render />
    </Layout>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  image: {
    marginTop: -Dimensions.get('window').height * 0.05,
    marginLeft: -Dimensions.get('window').height * 0.03,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});