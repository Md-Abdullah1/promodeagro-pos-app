import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [mobileNumber, setMobileNumber] = useState(""); // State to store the mobile number
    const [mobileNumberEntered, setMobileNumberEntered] = useState(false); // State to track if mobile number is entered

    const handleChange = (text) => {
        // Update the mobile number state only if it contains 10 digits
        if (/^\d{10}$/.test(text)) {
            setMobileNumber(text);
            setMobileNumberEntered(true); // Set mobile number entered to true
        } else {
            setMobileNumber(""); // Clear mobile number if it's not valid
            setMobileNumberEntered(false); // Set mobile number entered to false
        }
    };

    const handleGoToOtp = () => {
        // Check if the mobile number is valid (10 digits)
        if (mobileNumberEntered) {
            navigation.navigate('Otp', { data: [{ mobileNumber }] });
            console.log("User-Mobile number ",mobileNumber)
        } else {
            Alert.alert("Enter Mobile Number", "Please enter a 10-digit mobile number.");
        }
    };

    const handleGoToSignup = () => {
        navigation.navigate('Signup');
    };

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 }}>
            <View style={{ width: 300, height: 350, borderRadius: 10, padding: 30, backgroundColor: '#FFF' }}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 6, color: '#000' }}>Log in</Text>
                <Text style={{ fontSize: 15, color: '#616161', marginBottom: 10 }}>Synectiks Farms</Text>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 14, color: '#616161' }}>Mobile Number</Text>
                    <TextInput
                        placeholder="Enter the Mobile number"
                        style={{ borderWidth: 1, borderColor: '#999', borderRadius: 5, padding: 7, color: "black" }}
                        onChangeText={handleChange}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={{ backgroundColor: '#303030', borderRadius: 5, padding: 10, marginBottom: 10, alignItems: 'center' }} onPress={handleGoToOtp}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }} >Continue with number</Text>
                </TouchableOpacity>

                <Pressable onPress={handleGoToSignup}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#005db3', }}>New to Synectiks Farms? <Text style={{ fontWeight: 'normal', color: '#FFF' }}>Get started --</Text></Text></Pressable>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ marginRight: 10, color: '#616161' }}>Help</Text>
                    <Text style={{ marginRight: 10, color: '#616161' }}>Privacy</Text>
                    <Text style={{ color: '#616161' }}>Terms</Text>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
