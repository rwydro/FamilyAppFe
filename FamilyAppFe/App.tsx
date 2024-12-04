import { StyleSheet, View } from 'react-native';
import {Login} from "@/screens/Login";
import {PaperProvider} from "react-native-paper";

export default function App() {
  return (
      <PaperProvider>
        <View style={styles.container}>
          <Login/>
        </View>
      </PaperProvider>
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
