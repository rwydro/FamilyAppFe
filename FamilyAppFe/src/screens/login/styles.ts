import {ImageStyle, TextStyle} from "react-native";

export const loginPageLayout: TextStyle = {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: "100%"
}

export const headlineContainer: TextStyle = {
    alignItems: 'flex-start',
    flex: 0.1,
    justifyContent: 'flex-start'
}

export const headline: TextStyle = {
    color: "black",
    fontFamily: 'inter',
    fontSize: 48,
    fontWeight: "bold"
}

export const subHeadline: TextStyle = {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
}

export const contentContainer: TextStyle = {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'space-between',
    maxWidth: 350,
    padding: 20,
    width: "100%"
}

export const inputContainer: TextStyle = {
    alignItems: 'center',
    justifyContent: "flex-start",
    width: "100%"
}

export const textInput: TextStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    color: "#828282",
    fontSize: 14,
    height: 40,
    marginBottom: 8,
    marginTop: 8,
    minWidth: 200,
    width: "100%"
}

export const loginButton: TextStyle = {
    cursor: 'pointer',
    width: "100%"
}

export const devider: TextStyle = {
    marginBottom: 12,
    marginTop: 12,
    width: "100%"
}

export const googleButton: TextStyle = {
    width: "100%",
}

export const googleIcon: ImageStyle = {
    width: 24,
    height: 24,
    resizeMode: 'contain',
}



