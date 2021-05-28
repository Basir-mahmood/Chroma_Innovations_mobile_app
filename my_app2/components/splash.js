import React, { useEffect, useState } from 'react';

import { View, Component, ImageBackground, Image, StyleSheet } from 'react-native';
// import Resizer from 'react-image-file-resizer'
import { StackActions, NavigationActions } from 'react-navigation';



export default class Splash extends React.Component {

    componentDidMount() {
        setTimeout(
            () => {
                this.props.navigation.navigate("Home") // Navigating to the Homescreen



                // Resetting the Navigation Stack
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
            , 2000)
    }



    render() {
        return (
            <View style={styles.ImageContainer} >
                <Image source={require('../assets/chroma_logo.png')} style={styles.ImageStyles} />
            </View>
        )

    }


};
const styles = StyleSheet.create({
    ImageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },

    ImageStyles: {

        height: "40%",
        width: "100%",


    }


})