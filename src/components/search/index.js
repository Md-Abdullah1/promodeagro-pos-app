import React, {useState, useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {TextInput} from 'react-native';
// import { Box, Input,Text } from 'react-native-magnus';
// import { Order, LineItem, Product } from '../../models';
// import { DataStore } from '@aws-amplify/datastore';
// import { Product } from '../../models';

import styles from './style';
// import { useNavigation } from '@react-navigation/native';

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');
  //  const navigation = useNavigation();
  const handleSearch = term => {
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'semibold'}}>Catalog</Text>
      <TextInput
        style={styles.input}
        // mx={3}
        placeholder="Search"
        w="70%"
        onChangeText={handleSearch}
        value={searchTerm}

        // borderColor="gray500"
        // borderWidth={1}
        // borderRadius={10}
        // p={2}
        // h={20}
        // style={}
      />
    </View>
  );
}

export default Search;

// style={{backGround:'blue',flex:1,flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',padding: 5,}}
