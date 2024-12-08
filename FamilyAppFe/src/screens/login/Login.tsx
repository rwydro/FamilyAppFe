import {Text, TextStyle, View, Image} from "react-native";
import {Button, Divider, Headline, Subheading, TextInput} from "react-native-paper";
import React, {useState} from "react";
import {
    contentContainer, devider, googleButton, googleIcon,
    headline,
    headlineContainer,
    inputContainer, loginButton,
    loginPageLayout,
    subHeadline, textInput
} from "@/screens/login/styles";
import {black, textGreyColor, lightGrey, white} from "@/design/colors";
const GoogleIcon = require("../../assets/icons/google.png");


export const Login = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false);

    const validateEmail = (value: string):boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleEmailChange = (text: string): void => {
        setEmail(text);
        //setError(!validateEmail(text)); // Validation
    };

    return (
        <View style={loginPageLayout}>
            <View style={headlineContainer}>
                <Headline style={headline} >Family App</Headline>
            </View>
            <View style={contentContainer}>
                <Subheading style={subHeadline}> Create account </Subheading>
                <View style={inputContainer}>
                    <Text>Enter your email</Text>
                    <TextInput
                        error={error}
                        label={"Email"}
                        mode={"outlined"}
                        value={email}
                        onChangeText={(value) => handleEmailChange(value)}
                        selectionColor={textGreyColor}
                        activeOutlineColor={lightGrey}
                        textColor={textGreyColor}
                        style={textInput}
                        outlineStyle={{borderColor: lightGrey}}
                    ></TextInput>
                </View>
                <Button
                    theme={{ colors: {primary: black, surfaceDisabled: lightGrey }}}
                    mode={"contained"}
                    style={loginButton}
                >Login</Button>
                <Divider horizontalInset={true} style={devider}/>
                <Button
                    icon={
                        () =>
                            <Image
                                source={GoogleIcon}
                                style={googleIcon}
                            />
                    }
                    textColor={black}
                        buttonColor={white}
                        mode="contained"
                        style={googleButton}>Continue with Google</Button>
            </View>
        </View>
    )
}