import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {generateClient} from 'aws-amplify/api';
// import {Ionicons, FontAwesome5, AntDesign, Fontisto} from '@expo/vector-icons';
import styles from './styles';

const PrintToA4 = () => {
  // const [data, setData] = useState([])
  const navigation = useNavigation();
  const ProductsData = useSelector(state => state.getAllProducts);

  console.log(
    'redux in products page in the product page',
    ProductsData,
    typeof ProductsData,
  );

  const [GetProduct, setGetProducts] = useState([...ProductsData]);

  const Header = () => (
    <View>
      <Text>Category</Text>
    </View>
  );

  const uniqueCategoriesSet = new Set();

  GetProduct.forEach(item => {
    if (item && item.category) {
      uniqueCategoriesSet.add(item.category);
    }
  });

  const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);

  const BodyButton = () => (
    <View style={{padding: 10}}>
      {uniqueCategoriesArray.map(category => (
        <TouchableOpacity
          key={category}
          onPress={() => {
            const CatProducts = GetProduct.filter(e => e.category === category);
            console.log(CatProducts);
            navigation.navigate('productPrinter', {
              category,
              catProducts: CatProducts,
            });
          }}
          style={[styles.flexRow, styles.box, styles.bgLight]}>
          <Text>{category}</Text>
          {/* <Ionicons name="ios-cart" size={20} color="black" /> */}
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View>
      <BodyButton />
    </View>
  );
};

export default PrintToA4;
