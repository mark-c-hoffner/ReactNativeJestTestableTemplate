import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dependency = () => {
  return (
      <Text style={styles.text}>
        Hello from Dependency
        </Text>
  );
}

export default Dependency;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(22, 22, 22)",
        color: "rgb(213, 213, 213)",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        display: "inline-flex",
        flexDirection: "column",
        minHeight: "100%",
        height: "100%",
        maxHeight: "100%",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "rgb(213, 213, 213)",
    }
});