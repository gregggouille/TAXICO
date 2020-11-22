import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const WelcomeScreen = (props) => {
  const goTo = () => {
    // console.log("home props ", props);
    props.navigation.push("Login", { nom: "greg", age: "43" });
  };
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity onPress={goTo}>
        <View>
          <Text>Allez à Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
});
export default WelcomeScreen;
