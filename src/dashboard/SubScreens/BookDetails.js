import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/Layout/Layout';
import { selfLinkAsync } from '../../store/reducers/bookReducer';
import HTML from 'react-native-render-html';
import Button from '../../../components/Form/Button/Button';
import styles from '../../../styles/dashboard/book-detail.css'

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
          <View style={styles.container}>
            <View style={styles.header}>
              <Image style={styles.image} source={{ uri: state.self?.volumeInfo?.imageLinks?.thumbnail }} />
              <View style={styles.bookInformation}>

                <Text style={styles.bookTitle}>
                  {state.self?.volumeInfo?.title}
                </Text>
                <Text style={styles.bookAuthor}>{state.self.volumeInfo?.authors}</Text>
              </View>


            </View>

            <View style={styles.descriptionContainer}>
              <ScrollView>
                {
                  state.self.volumeInfo?.description
                    ?
                    <HTML baseFontStyle={styles.htmlStyle}
                          source={{ html: state.self.volumeInfo?.description }}
                          contentWidth={Dimensions.get('window').width * 0.7} />
                    : null
                }

              </ScrollView>
            </View>

            <View style={styles.addButton}>
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
