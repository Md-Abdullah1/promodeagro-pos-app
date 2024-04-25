import {View, Text, TextInput, item, Image, Pressable} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from './style';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const UpdateProducts = () => {
  const route = useRoute();

  const Prodata = route.params.product;
  console.log('This is the data in the Edit page', Prodata);

  const [updateData, setUpdateData] = useState({
    name: Prodata.name,
    price: Prodata.price.toString(),
    category: Prodata.category,
    unit: Prodata.unit,
  });

  const handleUpdate = (name, value) => {
    setUpdateData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [selectedValue, setSelectedValue] = useState(Prodata.unit);

  return (
    <View style={[styles.maincon]}>
      {/* <Text>UpdateProducts</Text> */}
      <View style={[styles.Imgcontainer]}>
        <View style={[styles.Img, {width: '50%'}]}>
          <Image
            source={{
              uri: Prodata.image,
            }}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        </View>
        <View style={[styles.Img, {width: '50%'}]}>
          <TextInput placeholder={Prodata.name} style={styles.textInputStyle} 
          name="name"
          onChangeText={value => handleUpdate('name', value)}/>
          <TextInput
            placeholder={Prodata.price.toString()}
            onChangeText={value => handleUpdate('price', value)}
            name="price" // keyboardType="numeric"
            style={styles.textInputStyle}
          />
        </View>
      </View>
      <View style={[styles.EditCat, {marginTop: 20}]}>
        <TextInput
          placeholder={Prodata.category}
          name="category"
          onChangeText={value => handleUpdate('category', value)}
          style={[{width: '50%'}, styles.textInputStyle]}
        />
        <Picker
          selectedValue={selectedValue}
          name="selectedValue"
          onChangeText={value => handleUpdate('selectedValue', value)}
          // defaultValue={selectedValue}
          // value={selectedValue}
          onValueChange={itemValue => setSelectedValue(itemValue)}
          style={[{width: '50%'}, styles.textInputStyle]}>
          <Picker.Item label="Kg" value="KG" />
          <Picker.Item label="Grams" value="GRAM" />
          <Picker.Item label="Piece" value="PIECE" />
        </Picker>
      </View>

      <Pressable
        style={[{marginTop: 40, paddingHorizontal: 40}, styles.textInputStyle]}
        onPress={() => console.log("updated data",updateData)}>
        <Text>Save</Text>
      </Pressable>
    </View>
  );
};

export default UpdateProducts;
