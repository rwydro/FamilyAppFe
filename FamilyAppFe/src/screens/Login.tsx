import {Text, TextStyle, View, Image} from "react-native";
import {Button, Divider, Headline, Subheading, TextInput} from "react-native-paper";
import React, {useState} from "react";
const GoogleIcon = require("../assets/icons/google.png");

const headline: TextStyle = {
    color: "black",
    fontSize: 48,
    fontFamily: 'inter',
    fontWeight: "bold"
}

const subHeadline: TextStyle = {
    color: "black",
    fontSize: 24,
    marginBottom: 20
}

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
            <View style={{ flex: 0.1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Headline style={headline} >Family App</Headline>
            </View>
            <View style={{ flex: 0.3, justifyContent: 'space-between', alignItems: 'center', padding: 20, maxWidth: 350, width: "100%"}}>
                <Subheading style={subHeadline}> Create account </Subheading>
                <View style={{width: "100%", alignItems: 'center', justifyContent:"flex-start"}}>
                    <Text>Enter your email</Text>
                    <TextInput
                        error={error}
                        label={"Email"}
                        mode={"outlined"}
                        value={email}
                        onChangeText={(value) => handleEmailChange(value)}
                        selectionColor={"#828282"}
                        activeOutlineColor={"#E0E0E0"}
                        textColor={"#828282"}
                        style={{
                            width: "100%",
                            backgroundColor: "#FFFFFF",
                            color: "#828282",
                            borderRadius: 8,
                            minWidth: 200,
                            height: 40,
                            fontSize: 14,
                            marginBottom:8,
                            marginTop:8
                        }}
                        outlineStyle={{
                            borderColor: "#E0E0E0"
                        }}
                    ></TextInput>
                </View>
                <Button
                    theme={{
                        colors: {
                            primary: "#000000",
                            surfaceDisabled: "#E0E0E0",
                        }
                    }}
                    mode={"contained"}
                    style={{width: "100%", cursor: 'pointer'}}
                >Login</Button>
                <Divider horizontalInset={true} style={{width: "100%", marginTop: 12, marginBottom: 12}}/>
                <Button
                    icon={
                        () =>
                            <Image
                                source={GoogleIcon}
                                style={{
                                    width: 24,
                                    height: 24,
                                    resizeMode: 'contain',
                                }}
                            />
                    }
                    textColor={"#000000"}
                        buttonColor={"#EEEEEE"}
                        mode="contained"
                        style={{
                            width: "100%"

                }}>Continue with Google</Button>
            </View>

        </View>
    )
}