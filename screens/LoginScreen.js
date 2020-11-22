import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
const LoginScreen = (props) => {
  //   useEffect(() => {
  //     console.log("props", props);
  //   }, []);
  const goTo = () => {};
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
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
export default LoginScreen;
