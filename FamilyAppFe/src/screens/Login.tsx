import {Text, TextStyle, View} from "react-native";
import {Button, Headline, Subheading} from "react-native-paper";

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

export const Login = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 0.1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Headline style={headline} >Family App</Headline>
        </View>
        <View style={{ flex: 0.3, justifyContent: 'flex-start', alignItems: 'center', padding: 20}}>
            <Subheading style={subHeadline}> Create account </Subheading>
            <Text>Login or create account</Text>
        </View>
        <Button buttonColor={"black"} textColor={"white"}>Login</Button>
    </View>
)