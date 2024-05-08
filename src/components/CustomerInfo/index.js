import {View, Text, Pressable, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {s} from 'react-native-wind';
import AntDesign from 'react-native-vector-icons/AntDesign';
import profile from '../../public/Vector.jpg';
import profile2 from '../../public/female.jpg';
import success from '../../public/success.jpg';
const CustomerInfo = () => {
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  return (
    <View
      style={[
        s`flex flex-row justify-between `,
        styles.container,
        styles.bgTertiary,
      ]}>
      <View style={[s`p-4`, styles.leftPart, styles.bgWhite]}>
        <View
          style={[
            s` p-2 py- flex flex-row justify-between items-center`,
            styles.bgWhite,
            styles.upper,
          ]}>
          <View style={[s`flex flex-row  `]}>
            <AntDesign
              name="arrowleft"
              size={28}
              color="#FC8019"
              style={[s` flex justify-center items-center text-center m-0 p-0`]}
              onPress={() => navigation.goBack()}
            />
            <Text style={[s`text-xl mx-2 `, styles.textPrimary]}>
              Order History
            </Text>
          </View>
          <Pressable
            style={[
              s`text-lg flex flex-row p-2 items-center rounded`,
              styles.bgPrimary,
            ]}
            onPress={() => {
              console.log('naviogation to add user');
              navigation.navigate('Adduser');
            }}>
            <AntDesign name="plus" size={18} color="#F5F5F5" />
            <Text style={[s`text-lg mx-2`, styles.textWhite]}>
              New Customer
            </Text>
          </Pressable>
        </View>
        <View style={[s` rounded-lg p-2`, styles.bgPureWhite, styles.lower]}>
          <View
            style={[
              s`w-full h-fit p-1 px-3 flex justify-start flex-row   border-b-2`,
            ]}>
            <TextInput
              style={[
                s`  rounded p-1 self-center `,
                isFocused && styles.searchBarFocused,
                styles.searchBar,
              ]}
              placeholder="Search for Order Id or Date..."
              placeholderTextColor="#9F9F9E"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              // value={searchQuery}
              // onChangeText={handleSearchQueryChange}
            />
          </View>
          <View style={[s`w-full h-fit`]}>
            <View
              style={[
                s`w-12 h-12 border border-gray-200 p-1 mr-2 my-4 rounded-lg`,             ]}>
              <Image source={profile} style={[s`w-full h-full rounded-lg`]} />
            </View>
            <View style={[s``]}>content</View>
          </View>
          <View style={[s``]}></View>
        </View>
      </View>
      <View style={[s``, styles.rightPart, styles.bgPrimary]}>
        <Text>CustomerInfo</Text>
      </View>
    </View>
  );
};

export default CustomerInfo;
