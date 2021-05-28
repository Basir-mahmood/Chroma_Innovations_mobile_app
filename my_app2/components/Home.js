import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Constants from 'expo-constants';



export default class Home extends React.Component {
    _CreatePanorama() {
        this.props.navigation.navigate("MyCamera")
    }

    _ShowPanorama() {
        this.props.navigation.navigate("LoadPanorama")
    }
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={() => this._CreatePanorama()}>
                    <Text style={{ color: '#ffff', fontSize: 16, }} >Create New Panorama 360</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this._ShowPanorama()}>
                    <Text style={{ color: '#ffff', fontSize: 16, }} >Load Panorama 360</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,


    },
    button: {
        alignItems: "center",
        backgroundColor: 'rgb(0,142,204)',
        padding: 10,
        margin: 10,
        width: 300

    },
})