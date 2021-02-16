import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const DownloadScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Download Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center"
    }
});

export default DownloadScreen;