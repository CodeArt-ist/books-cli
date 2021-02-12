import React from 'react';
import { Text, View } from 'react-native';

const BookDetails = ({ route, navigation }) => {
  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hey this screen is book detail </Text>
      <Text>{route.params.selfLink}</Text>
    </View>
  );
};

export default BookDetails;