import React, {useState} from 'react';
import {TextInput, View, Text, ToastAndroid, Alert, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {addCustomer} from '../../redux/slice/customerSlice';
import {useDispatch} from 'react-redux';
import {creatingCustomer} from '../../api/createCustomer';
import {s} from 'react-native-wind';
import styles from './styles';
const Adduser = () => {
  const [mobileNumber, setMobileNumber] = useState(''); // State to store the mobile number
  const [mobileNumberEntered, setMobileNumberEntered] = useState(false);
  const [inputUser, setInputUser] = useState({
    name: '',
    phone: '',
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const handleChange = (name, value) => {
    if (name === 'phone') {
      const isValidPhone = /^\d{0,10}$/.test(value); // Allow up to 10 digits
      if (isValidPhone) {
        setMobileNumber(value);
        setInputUser({...inputUser, [name]: value});
        setMobileNumberEntered(value.length === 10);
      }
    } else {
      setInputUser({...inputUser, [name]: value});
    }
  };

  // const routeName = navigation.getState().routes[0].name ;
  // console.log('route name',routeName)
  const total = route.params?.total;
  const items = route.params?.items;
  console.log('router values', total, items);

  const handleSubmit = async () => {
    if (mobileNumberEntered && inputUser.name.trim().length > 0) {
      console.log('details', inputUser);
      const CustomerCreated = await createCustomer(inputUser);
      console.log('sending customer to redux', CustomerCreated);
      dispatch(addCustomer(CustomerCreated));
      navigation.navigate('Customers', {total: total, items: items});
      setInputUser({name: '', phone: ''});
      setMobileNumber(''); // Resetting mobile number
      setMobileNumberEntered(false); // Resetting mobile number entered flag
    } else {
      const errorMessage =
        'Please ensure all fields are correctly filled. Name is required and Phone Number must be exactly 10 digits.';
      if (Platform.OS === 'android') {
        ToastAndroid.showWithGravityAndOffset(
          errorMessage,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
      } else {
        Alert.alert(errorMessage);
      }
    }
  };

  const handleGoToAdduser = () => {
    navigation.goBack();
  };

  // const Navigation = useNavigation();
  const createCustomer = async details => {
    console.log('This is items ', details);
    try {
      console.log('creating customer async', details);

      const response = await creatingCustomer(details);
      console.log('created customer response ', response);

      return response;
    } catch (error) {
      console.log('error creating customer', error);
    }
  };

  return (
    <View>
      <View
        style={[s`bg-blue-200 p-4 flex flex-row justify-between items-center`]}>
        <View style={[s`flex flex-row  `]}>
          <AntDesign
            name="arrowleft"
            size={28}
            color="#FC8019"
            style={[s` flex justify-center items-center text-center m-0 p-0`]}
            onPress={handleGoToAdduser}
          />
          <Text style={[s`text-xl mx-2 `, styles.textPrimary]}>
            Add new Customer
          </Text>
        </View>
        <View style={[s`flex flex-row items-center`]}>
          <Text style={[s`text-lg font-medium mx-2`, styles.textBlack]}>
            ID Number
          </Text>
          <TextInput
            placeholder="#53453     ( Automatic ID Generators )"
            placeholderTextColor="gray"
            style={[s`p-2 py-1 w-64`, styles.input]}
            // value={inputUser.name}
            editable={false}
          />
        </View>
      </View>
      <View style={[s`bg-gray-600 w-full h-full flex  items-center `]}>
        <View style={[s`flex bg-green-200  p-4 flex-row justify-between w-full`,styles.upper]}>
          <View style={[s` p-2`,styles.leftPart]}>
            <View style={[s``,styles.inputBoxFull]}>
              <Text>Name*</Text>
              <TextInput
              placeholder="Name * (Required)"
              placeholderTextColor="gray"
              style={[s`mt-2 w-full`,styles.input]}
              value={inputUser.name}
              onChangeText={e => handleChange('name', e)}
            />
            </View>
            <View style={[s``,styles.inputBoxFull]}>
              <Text>Name*</Text>
              <TextInput
              placeholder="Name * (Required)"
              placeholderTextColor="gray"
              style={[s`mt-2`,styles.input]}
              value={inputUser.name}
              onChangeText={e => handleChange('name', e)}
            />
            </View>
            <View style={[s``,styles.inputBoxFull]}>
              <Text>Name*</Text>
              <TextInput
              placeholder="Name * (Required)"
              placeholderTextColor="gray"
              style={[s`mt-2`,styles.input]}
              value={inputUser.name}
              onChangeText={e => handleChange('name', e)}
            />
            </View>
            
          </View>
          <View style={[s``,styles.rightPart]}>
            <TextInput
              placeholder="Name * (Required)"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 20,
                fontSize: 16,
                padding: 15,
                color: 'black',
              }}
              value={inputUser.name}
              onChangeText={e => handleChange('name', e)}
            />

            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="gray"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 20,
                fontSize: 16,
                padding: 15,
                color: 'black',
              }}
              keyboardType="numeric"
              value={inputUser.phone}
              onChangeText={text => handleChange('phone', text)}
            />
          </View>
        </View>
        <Pressable style={[s`w-32 rounded flex justify-center items-center m-2 mb-0 p-2 `,styles.bgPrimary ,styles.textWhite,styles.lower]} onPress={handleSubmit}>
          <Text style={[s``,styles.textWhite]}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Adduser;
