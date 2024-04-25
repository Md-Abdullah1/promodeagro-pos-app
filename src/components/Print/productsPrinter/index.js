import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AddProduct, removeItem} from '../../redux/slice/Product';

const ProductsPrint = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const Pdata = route.params.catProducts;
  const navigation = useNavigation();

  const HandleIncrement = veg => {
    dispatch(AddProduct(veg));
  };

  const handleDecrement = veg => {
    dispatch(removeItem(veg.id));
  };

  const handleProduct = prod => {
    navigation.navigate('ProductPage', {value: prod});
  };

  const handlePrint = () => {
    window.print();
    // Add your print logic here
    console.log('Printing...');
    // You can add the logic to print the A4 page here.
  };

  return (
    <View style={styles.container}>
      <Button title="Print" onPress={handlePrint} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          {Pdata.map(veg => (
            <TouchableOpacity
              onPress={() => handleProduct(veg)}
              key={veg.id}
              style={styles.productContainer}>
              <Image
                source={{
                  uri: `${veg.image}`,
                }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.productName}>
                  {veg.name}!
                </Text>
                <Text style={styles.productPrice}>
                  Price: ${veg.price}/{veg.unit}
                </Text>
              </View>
              <View style={styles.productTotal}>
                <Text style={styles.productTotalText}>
                  {/* Total: ${calculateItemPrice(veg)} */}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%', // Two products in one line, with a small gap between them
    borderWidth: 1,
    borderColor: 'black',
    margin: 2,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 70,
    borderRadius: 10,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
  productPrice: {
    fontSize: 12,
  },
  productTotal: {
    alignItems: 'center',
    gap: 10,
  },
  productTotalText: {
    fontWeight: '700',
  },
});

export default ProductsPrint;
