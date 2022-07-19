import { SignIn } from "./src/screens/SignIn";
import { NativeBaseProvider, StatusBar } from "native-base"
import { THEME } from "./src/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import React from "react";



export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </ NativeBaseProvider>
  );
}
