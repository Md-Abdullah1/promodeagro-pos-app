import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable,Alert } from "react-native";
import { useNavigation , useRoute  } from "@react-navigation/native";
import { toggleSignIn } from "../../redux/slice/customerSlice";
import { UseDispatch, useDispatch } from "react-redux";


const Otp = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const setIsSignedIn = route.params?.setIsSignedIn;

     
    // const { setIsSignedIn } = route.params;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);


  const handleGoToHome = () => {
    const isOtpFilled = otp.every((value) => value.trim().length > 0); // Check if all OTP fields are filled
    if (!isOtpFilled) {
        Alert.alert("Incomplete OTP", "Please fill all OTP fields.");
        return;
    }

    dispatch(toggleSignIn()) // Call the setIsSignedIn function to set the signed-in state
    if (setIsSignedIn) {
    }
    // navigation.navigate('HomePage');
};
 

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.nativeEvent.key === "ArrowRight" && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.nativeEvent.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.nativeEvent.key === "ArrowRight" && index === otp.length - 1) {
      inputRefs.current[0]?.focus();
    } else if (e.nativeEvent.key === "ArrowLeft" && index === 0) {
      inputRefs.current[otp.length - 1]?.focus();
    }else if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move focus to the previous input if backspace is pressed and current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <View style={{ marginLeft: 5 }}> */}
          <Text style={{ fontWeight: "bold", fontSize: 20 ,color:"black"}}>Enter OTP</Text>
          <Text style={{ color: "#A2A1A8", fontSize: 14 }}>We have shared a code to your registered Mobile Number</Text>
          
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                keyboardType="numeric"
                style={{ borderWidth: 1, borderColor: "#000", borderRadius: 5, padding: 10, width: 40, textAlign: "center", marginHorizontal: 5 ,color:"black"}}
                maxLength={1}
                value={otp[index]}
                onChangeText={(text) => handleInputChange(index, text)}
                onFocus={() => inputRefs.current[index].focus()}
                ref={(ref) => (inputRefs.current[index] = ref)}
                onKeyPress={(e) => handleKeyDown(e, index)}
              />
            ))}
          </View>
          <Pressable
            style={{ backgroundColor: "blue", padding: 10, marginTop: 20, width: 200, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
            // onPress={() => {
            //   if (otp.some((item) => item === "" || item === undefined)) {
            //     alert("Invalid Otp");
            //   } else {
            //     // dispatch(setOtp(otp.join("")));
            //     navigation.navigate("NewPassword");
            //   }
            // }}
            onPress={handleGoToHome}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Verify</Text>
          </Pressable>
      {/* </View> */}
    </View>
  );
};

export default Otp;
