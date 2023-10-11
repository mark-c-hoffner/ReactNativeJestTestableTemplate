import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Dependency from "./Dependency";

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello world! from component jsx
            </Text>
            <Dependency />
            <StatusBar style="auto" hidden={false} />
        </View>
    );
}

export default App;

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