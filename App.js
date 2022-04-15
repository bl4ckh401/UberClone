import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Homepage from './screens/Homepage';
import { store } from './store';
import 'react-native-gesture-handler'
import MapScreen from './screens/MapScreen';

export default function App() {

  const Stack = createStackNavigator()

  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding":"height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0 }
            style={{ flex:1 }}>
              <Stack.Navigator>
                <Stack.Screen
                name='Homepage'
                component={Homepage}
                options={
                  {
                    headerShown:false
                  }
                }
                />
                <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={
                  {
                    headerShown:false
                  }
                }
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    
    
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
