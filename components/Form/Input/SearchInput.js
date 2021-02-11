import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './input.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchAsync } from '../../../src/store/reducers/bookReducer';

const SearchInput = ({ value, placeholder, onChange, style }) => {

  const state = useSelector(state => state.book);
  const dispatch = useDispatch();

  const results = state.results;

  const [searchTerm, setSearchTerm] = useState();

  const onSearchInputChange = (e) => {
    setSearchTerm(e);
    if (searchTerm && searchTerm.length > 2) {
      dispatch(searchAsync(searchTerm));
    }

    return onChange(e);
  };

  const RenderResults = () => {
    if (searchTerm && searchTerm.length > 0) {
      if (results.length > 0) {
        return results.map((e, i) => {
          return <Text key={i} style={styles.searchResult}>{e}</Text>;
        });
      }
    }

    return null;

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