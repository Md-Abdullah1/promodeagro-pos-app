import {View, Text, Pressable, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {s} from 'react-native-wind';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import profile from '../../public/Vector.jpg';
import profile2 from '../../public/female.jpg';
import success from '../../public/success.jpg';
import {ScrollView} from 'react-native';
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
          <View style={[s`w-full h-fit flex m-0 p-0 flex-row  items-center`]}>
            <View style={[s`w-32 h-32 p-1 mr-2  rounded-lg`]}>
              <Image source={profile} style={[s`w-full h-full rounded-lg`]} />
            </View>
            <View style={[s`relative ml-2`, {width: '75%'}]}>
              <View style={[s`w-full  mb-2    `]}>
                <View style={[s`w-full  flex flex-row `]}>
                  <Text style={[s`text-lg`, styles.textBlack]}>
                    Vincent Lobo{' '}
                  </Text>
                  <Text style={[s`text-lg ml-16`, styles.textBlack]}>
                    #535252
                  </Text>
                </View>
                <Text style={[s`text-base`, styles.textGrey]}>
                  vincent.lobo@gmail.com
                </Text>
                <Text style={[s`text-base`, styles.textGrey]}>
                  + 12-38947291
                </Text>
              </View>
              <View
                style={[
                  s` flex flex-row justify-between `,
                  styles.lowerButtons,
                ]}>
                <Pressable
                  style={[
                    s`text-lg flex flex-row  p-2 items-center rounded w-36 justify-center`,
                    ,
                  ]}
                  onPress={() => {
                    console.log('clicked');
                  }}>
                  <Feather name="edit" size={18} color="#FC8019" />
                  <Text style={[s`text-lg mx-2`, styles.textPrimary]}>
                    Edit
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    s`text-lg flex flex-row p-2 items-center rounded w-36 justify-center`,
                    ,
                    styles.borderButton,
                  ]}
                  onPress={() => {
                    console.log('clicked');
                  }}>
                  <Text style={[s`text-lg mx-2`, styles.textPrimary]}>
                    Remove
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[s` m-1 w-full `, styles.purchaseList]}>
            <Text style={[s`text-base font-semibold`, styles.textBlack]}>
              Last Purchase Details
            </Text>
            <ScrollView style={[s`w-full`, styles.listView]}>
              <View style={[s` flex flex-row  justify-between items-center`, styles.bgWhite]} onPress={()=>{console.log('clicked')}}>
                <View style={[s`w-12 h-12 p-1 mr-2  rounded-lg`]}>
                  <Image
                    source={profile}
                    style={[s`w-full h-full rounded-lg`]}
                  />
                </View>
                <View style={[s`mx-3`]}>
                  <Text style={[s``, styles.textBlack]}>Vincent Lobo </Text>
                  <Text style={[s`mt-1`, styles.textGrey]}>+ 12-38947291</Text>
                </View>
                <Text style={[s`mx-3`, styles.textBlack]}>#712537182 </Text>
                <Text style={[s`mx-3`, styles.textBlack]}>16/05/2023 </Text>
                <AntDesign
                  name="arrowright"
                  size={24}
                  color="#FC8019"
                  style={[
                    s` flex justify-center items-center text-center m-0 p-0 mx-3`,
                  ]}
                    onPress={() => {console.log('clickeded')}}
                />
              </View>
            </ScrollView>
            <Text style={[s``]}></Text>
            <Text style={[s``]}></Text>
            <Text style={[s``]}></Text>
          </View>
        </View>
      </View>
      <View style={[s``, styles.rightPart, styles.bgPrimary]}>
        <Text>CustomerInfo</Text>
      </View>
    </View>
  );
};

export default CustomerInfo;
