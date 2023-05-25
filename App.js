import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
//import { Aclonica_400Regular } from '@expo-google-fonts/aclonica';
import * as SplashScreen from 'expo-splash-screen';

import { MainStackNavigator } from './components/MainStackNavigator';


export default function App() {
  //let [fontsLoaded] = useFonts({
    //Aclonica_400Regular,
    //'BrunoAceSC-Regular': require('./assets/fonts/BrunoAceSC-Regular.ttf'),
  //});

  //const onLayoutRootView = useCallback(async () => {
  //  if (fontsLoaded) {
  //    await SplashScreen.hideAsync();
  //}, [fontsLoaded]);

  //if (!fontsLoaded) {
  //  return null;
  //}

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>

  );
}


