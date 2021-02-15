import React from 'react';
import { Text, View } from 'react-native';

const Splash = () => {
  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Text style={{ fontSize: 50 }}>Loading...</Text>
    </View>
  );
};

export default Splash;