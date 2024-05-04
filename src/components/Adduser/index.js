import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ToastAndroid,
  Alert,
  Pressable,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {addCustomer} from '../../redux/slice/customerSlice';
import {useDispatch} from 'react-redux';
import {creatingCustomer} from '../../api/createCustomer';
import {s} from 'react-native-wind';
import profile from '../../public/Vector.jpg';
import profile2 from '../../public/female.jpg';
import styles from './styles';
const Adduser = () => {
  const [mobileNumber, setMobileNumber] = useState(''); // State to store the mobile number
  const [mobileNumberEntered, setMobileNumberEntered] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
  });
  const [gender, setGender] = useState('');
  const [imageUri, setImageUri] = useState(null);
  console.log(`from values `,userData)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const handleRadioChange = value => {
    // Update state only if the value is different from the current selection
    if (value !== gender) {
      setGender(value);
    }
  };
  const handleChange = (name, value) => {
    if (name === 'phone') {
      const isValidPhone = /^\d{0,10}$/.test(value); // Allow up to 10 digits
      if (isValidPhone) {
        setMobileNumber(value);
        setUserData({...userData, [name]: value});
        setMobileNumberEntered(value.length === 10);
      }
    } else {
      setUserData({...userData, [name]: value});
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

  const selectImage = async () => {
    if (launchCamera) {
      console.log('yes image  ');
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };
      launchCamera(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.error('ImagePicker Error:', response.error);
        } else {
          // const source = { uri: response.uri };
          const source = response.uri || response.assets?.[0]?.uri;
          setImageUri(source);
          console.log(`image response ${imageUri}`);

          // Optional: Save the image (requires react-native-fs)
          // if (RNFS) {
          //   const filePath = `${RNFS.DocumentDirectoryPath}/${source.uri.split('/').pop()}`;
          //   RNFS.moveFile(source.uri, filePath)
          //     .then(() => {
          //       console.log('Image saved to:', filePath);
          //     })
          //     .catch((error) => {
          //       console.error('Error saving image:', error);
          //     });
          // }
        }
      });
    } else {
      console.log('react native launchCamera not inittialized');
    }
  };
  console.log(`image uri ${imageUri}`);
  return (
    <View>
      <View
        style={[
          s` p-4 flex flex-row justify-between items-center`,
          styles.bgWhite,
        ]}>
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
      <View style={[s` w-full h-full flex  items-center `, styles.bgPureWhite]}>
        <View style={[s`  p-4 flex-row justify-between w-full`, styles.upper]}>
          <View style={[s`flex justify-between    p-2`, styles.leftPart]}>
            <View style={[s`  m-0`, styles.inputBoxFull]}>
              <Text style={[styles.textBlack]}>Name*</Text>
              <TextInput
                placeholder="Ramesh   "
                placeholderTextColor="gray"
                style={[s`mt-2 p-1 w-full`, styles.input]}
                value={userData.name}
                onChangeText={e => handleChange('name', e)}
              />
            </View>
            <View style={[s`  `, styles.inputBoxes]}>
              <View style={[s``, styles.inputBoxHalf]}>
                <Text style={[styles.textBlack]}>Phone Number*</Text>
                <TextInput
                  placeholder="8983462121   "
                  placeholderTextColor="gray"
                  style={[s`mt-2 p-1 `, styles.input]}
                  value={userData.phone}
                  keyboardType='numeric'
                  onChangeText={e => handleChange('phone', e)}
                />
              </View>
              <View style={[s``, styles.inputBoxHalf]}>
                <Text style={[styles.textBlack]}>Email</Text>
                <TextInput
                  placeholder="example@gmail.com   "
                  placeholderTextColor="gray"
                  style={[s`mt-2 p-1 `, styles.input]}
                  value={userData.email}
                  onChangeText={e => handleChange('email', e)}
                />
              </View>
            </View>
            <View style={[s`  m-0`, styles.inputBoxFull]}>
              <Text style={[styles.textBlack]}>Address</Text>
              <TextInput
                placeholder="address  "
                placeholderTextColor="gray"
                style={[s`mt-2 p-1 w-full`, styles.input]}
                value={userData.address}
                onChangeText={e => handleChange('address', e)}
              />
            </View>
            <View style={[s`flex-row `]}>
              <Text style={[s`mr-32 text-base font-normal`, styles.textBlack]}>
                Gender:
              </Text>
              <View style={[s`  items-center flex-row`]}>
                <TouchableOpacity onPress={() => handleRadioChange('male')}>
                  <View style={[s`flex flex-row mr-32 items-center`]}>
                    {gender === 'male' ? (
                      <View
                        style={[
                          s`w-4`,
                          styles.bgSecondary,
                          {
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                          },
                        ]}
                      />
                    ) : (
                      <View
                        style={[
                          s`border border-gray-200`,
                          {
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                          },
                        ]}
                      />
                    )}
                    <Text style={[s`text-base mx-2`, styles.textBlack]}>
                      Male
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRadioChange('female')}>
                  <View style={[s`flex flex-row mr-32 items-center`]}>
                    {gender === 'female' ? (
                      <View
                        style={[
                          s``,
                          styles.bgSecondary,
                          {
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                          },
                        ]}
                      />
                    ) : (
                      <View
                        style={[
                          s`border border-gray-200`,
                          {
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                          },
                        ]}
                      />
                    )}
                    <Text style={[s`text-base mx-2`, styles.textBlack]}>
                      Female
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[s`  `, styles.inputBoxes]}>
              <View style={[s``, styles.inputBoxHalf]}>
                <Text style={[styles.textBlack]}>State</Text>
                <TextInput
                  placeholder="Telangana   "
                  placeholderTextColor="gray"
                  style={[s`mt-2 p-1 `, styles.input]}
                  value={userData.state}
                  onChangeText={e => handleChange('state', e)}
                />
              </View>
              <View style={[s``, styles.inputBoxHalf]}>
                <Text style={[styles.textBlack]}>City</Text>
                <TextInput
                  placeholder="Hyderabad  "
                  placeholderTextColor="gray"
                  style={[s`mt-2 p-1 `, styles.input]}
                  value={userData.city}
                  onChangeText={e => handleChange('city', e)}
                />
              </View>
            </View>
            <View style={[s`  `, styles.inputBoxes]}>
              <View style={[s``, styles.inputBoxHalf]}>
                <Text style={[styles.textBlack]}>Pincode</Text>
                <TextInput
                  placeholder="500053  "
                  placeholderTextColor="gray"
                  style={[s`mt-2 p-1 `, styles.input]}
                  value={userData.pincode}
                  keyboardType='numeric'
                  onChangeText={e => handleChange('pincode', e)}
                />
              </View>
            </View>
          </View>
          <View style={[s`p-2 flex `, styles.rightPart]}>
            <Pressable
              onPress={selectImage}
              style={[s` rounded-2xl`, styles.profile]}>
              {imageUri ? (
                <Image
                  source={{uri: imageUri}}
                  style={[s`w-full h-full rounded-2xl`]}
                />
              ) : (
                <Image
                  source={profile}
                  style={[s`w-full h-full rounded-2xl`]}
                />
              )}

              {/* <Button title="Select Image" onPress={selectImage} /> */}
            </Pressable>
            <View style={[s`flex flex-row `]}>
              <View style={[s`w-12 h-12 bg-blue-700 mr-2 my-4 rounded-lg`]}>
                <Image source={profile} style={[s`w-full h-full rounded-lg`]} />
              </View>
              <View style={[s`w-12 h-12 bg-blue-700 mr-2 my-4 rounded-lg`]}>
                <Image
                  source={profile2}
                  style={[s`w-full h-full rounded-lg`]}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={[
            s`w-32 rounded flex justify-center items-center m-2 mb-0 p-2 `,
            styles.bgPrimary,
            styles.textWhite,
            styles.lower,
          ]}
          onPress={handleSubmit}>
          <Text style={[s``, styles.textWhite]}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Adduser;
