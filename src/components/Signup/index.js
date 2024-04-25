import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Signup = () => {
    const navigation = useNavigation();
    const handleGoToSignin = () => {
        navigation.navigate('Signin');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ borderWidth: 1, borderColor: '#000', borderRadius: 10, padding: 20, width: '90%', marginBottom: 20 }}>
                <View>
                    {/* <Text style={{ width: 100, height: 100, backgroundColor: '#ccc', marginBottom: 10 }}>Image</Text> */}
                </View>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black" }}>Create a Synectiks Account</Text>
                    <Text style={{ fontSize: 16, color: '#616161', marginBottom: 10 }}>One last step before starting your free trial.</Text>
                </View>
                <View>

                    <Text style={{ color: "black" }}>First Name</Text>
                    <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Enter your first name" />


                    <Text style={{ color: "black" }}>Last Name</Text>
                    <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Enter your last name" />

                    <Text style={{ color: "black" }}>Mobile Number</Text>
                    <TextInput style={{ borderWidth: 1, borderColor: '#000', borderRadius: 5, padding: 10, marginBottom: 10 }} placeholder="Enter your email" />

                    <TouchableOpacity style={{ backgroundColor: '#303030', borderRadius: 5, padding: 10, alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Create Synectiks Farms Account</Text>
                    </TouchableOpacity>
                    <Pressable onPress={handleGoToSignin}><Text style={{ textAlign: 'center', marginTop: 10, color: "black" }}>Already have a Synectiks Farms account? <Text style={{ color: '#005bd3', fontWeight: 'bold' }}>Log in</Text></Text></Pressable>
                    {/* <Text style={{ textAlign: 'center', marginTop: 10,color:"black" }}>By proceeding, you agree to the <Text style={{ color: '#005bd3', fontWeight: 'bold' }}>Terms and Conditions</Text> and <Text style={{ color: '#005bd3', fontWeight: 'bold' }}>Privacy Policy</Text></Text> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                        <Text style={{ color: '#616161', textDecorationLine: 'underline' }}>Help</Text>
                        <Text style={{ color: '#616161', textDecorationLine: 'underline' }}>Privacy</Text>
                        <Text style={{ color: '#616161', textDecorationLine: 'underline' }}>Terms</Text>
                    </View>
                </View>
            </View>
        </View>

    );
};

export default Signup;
