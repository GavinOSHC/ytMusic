import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const LibaryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Libary Screen</Text>
            <Button title="go to Downloads" onPress={() => navigation.navigate('Download Music')} />
            <Button title="My Playlists" onPress={() => navigation.navigate('My Playlists')} />
            <Button title="My Songs" onPress={() => navigation.navigate('My Songs')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center"
    }
});

export default LibaryScreen;