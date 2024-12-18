import { StyleSheet, View } from 'react-native';
import {Login} from "@/screens/login/Login";
import {PaperProvider} from "react-native-paper";
import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import React from "react";
import {Home} from "@/screens/home/Home";
import {NavigationContainer} from "@react-navigation/native";
import {BottomNavigation} from "@/components/layout/navigation-bottom";

type RootStackParamList = {
    Login: undefined,
    Main: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;


export default function App() {
  return (
      <NavigationContainer>
          <PaperProvider>
          <Stack.Navigator screenOptions={{
              headerShown: false,
          }}>
              <Stack.Screen name={'Main'} component={BottomNavigation} />
              <Stack.Screen name={'Login'} component={Login} />

          </Stack.Navigator>

          </PaperProvider>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
