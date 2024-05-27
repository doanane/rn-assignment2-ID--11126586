import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#f4ce14'}}>
      <Text style={{padding:80, fontSize: 26,color: "black"}}>
      My name is { ' '}
      <Text style={{fontWeight: 'bold'}}>
      Desmond Opoku Anane.</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
