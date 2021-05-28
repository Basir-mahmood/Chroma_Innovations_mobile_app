import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { PanoramaView } from "@lightbase/react-native-panorama-view";


const LoadPanorama = () => {


    return (

        <View style={styles.container}>
            {/* <PanoramaView
                style={styles.viewer}
                dimensions={{ height: 230, width: Dimensions.get("window").width }}
                inputType="mono"
                imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
            /> */}
            <Text> {PanoramaView}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewer: {
        height: 230,
    },
});
export default LoadPanorama;