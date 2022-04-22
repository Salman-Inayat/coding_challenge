import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";

import { HomeScreen } from "./src/screens/HomeScreen";
import { ImageDetailsScreen } from "./src/screens/ImageDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Gallery" }}
            />
            <Stack.Screen
              name="ImageDetails"
              component={ImageDetailsScreen}
              options={{ title: "Image" }}
            />
          </Stack.Navigator>
        </QueryClientProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
