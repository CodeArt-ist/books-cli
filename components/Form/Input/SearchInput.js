import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './input.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchAsync } from '../../../src/store/reducers/bookReducer';

const SearchInput = ({ navigation, value, placeholder, onChange, style }) => {

  const state = useSelector(state => state.book);
  const dispatch = useDispatch();

  const results = state.results;

  const [searchTerm, setSearchTerm] = useState();

  const onSearchInputChange = (e) => {
    setSearchTerm(e);
    dispatch(searchAsync(searchTerm));
    return onChange(e);
  };

  const RenderResults = () => {
    if (results.length > 0) {
      if (searchTerm?.length > 0) {
        return results.map((e, i) => {
          return <Result key={i} selfLink={e.selfLink} title={e.title} />;
        });
      }
    }

    return null;

  };

  const Result = ({ title, selfLink }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('BookDetails', { selfLink })}>
        <Text style={styles.searchResult}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput style={{ ...styles.input, ...styles.searchInput, ...style }}
                 placeholder={placeholder}
                 onChangeText={e => onSearchInputChange(e)}
                 value={value} />
      <View>
        <RenderResults />
      </View>
    </View>
  );
};

export default SearchInput;