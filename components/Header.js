import React from "react";
import { View, StyleSheet } from "react-native";

const Header = (props) => {
  const { container, closeIcon, cartIcon } = styles;
  return (
    <>
      <View style={container}></View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {},
  closeIcon: {},
  cartIcon: {},
});
export default Header;
