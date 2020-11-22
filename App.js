import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
const { Navigator, Screen } = createStackNavigator();
const Root = () => (
  <Navigator>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen
          name="Login"
          component={LoginScreen}
          options={{ headerLeft: null, title: "Connection" }}
        />
        <Screen
          name="Root"
          component={Root}
          options={(options) => {
            return { title: options.route.params.screen };
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
