
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Feather as Icon } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import Svg, { Rect } from 'react-native-svg';
import { Gyroscope, DeviceMotion } from 'expo-sensors';
import MotionDetect from './MotionDetect';
// import * as Permissions from 'expo-permissions';
// import { usePermissions } from '@use-expo/permissions';


export default function MyCamera() {

  const [hasPermission, setHasPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);

  const [type, setType] = useState(Camera.Constants.Type.back);

  let [Img_to_show, set_Img_to_show] = useState('../assets/chroma_logo.png')
  let [screen_ratio, set_screen_ratio] = useState("0%")


  let cam = useRef(null);

  const _takePicture = async () => {



    if (cam.current) {
      let options = {
        quality: 1.0,
        base64: true,
        skipProcssing: false,
      }

      let photo = await cam.current.takePictureAsync(options);
      // console.log(cam.current.getSupportedRatiosAsync(options));

      let source = photo.uri;

      if (source) {

        // console.log(picture.source);
        handleSave(source, photo)
        cam.current.resumePreview();
        console.log("picture source true", source)
      }
      console.log("picture source", source)
    }
    else {
      console.log(11)
    }

  };

  const handleSave = async (photo, src) => {
    // a = DeviceMotion.isAvailableAsync().then(console.log)
    // console.log('absc', a)

    const { status } = await Camera.requestPermissionsAsync();
    // const [permission, askPermission] = usePermissions(Permissions.CAMERA, { ask: true });
    if (status === "granted") {
      console.log(photo)
      let assert = await MediaLibrary.createAssetAsync(photo);
      await MediaLibrary.createAlbumAsync('Chroma Innovations/ExpoReactNative', assert);
      // await MediaLibrary.deleteAssetsAsync(photo)
      let assertInfo = await MediaLibrary.getAssetInfoAsync(assert)

      set_Img_to_show(src.base64)
      set_screen_ratio("30%")

    } else {
      console.log('Oh! You missed to give permission,')
    }

  }


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const { mediaStatus } = await MediaLibrary.requestPermissionsAsync();

      // const { statusDeviceMotion } = await Permissions.askAsync(Permissions.MOTION)
      setHasPermission(status === 'granted');
      setHasMediaPermission(mediaStatus === 'granted');
    })();
  }, []);

  if (hasPermission === null || hasMediaPermission === null) {
    return <View ></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>


      <View style={styles.cameraView}>
        <Camera ref={cam} style={styles.camera} type={type}>

          {/* < MotionDetect /> */}

          <View
            style={styles.buttonContainer}>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: "flex-end",
              }} >
              <View>
                <TouchableOpacity
                  // style={styles.button}
                  onPress={() => _takePicture()} >
                  <Icon name="aperture" size={50} color="white" />

                </TouchableOpacity>
              </View>


            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>

              <Text style={styles.text}>Flip </Text>

            </TouchableOpacity>
          </View>
        </Camera>
      </View>


      <View style={{ flex: 1, maxWidth: screen_ratio }}>
        {/* <Text>MotionTilt</Text> */}
        <Image
          source={{ uri: `data:image/jpeg;base64,${Img_to_show}` }}
          style={{
            flex: 1,
            // width: 10,
          }}

        />
      </View>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  cameraView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingLeft: 40,
    flexDirection: 'column'
  },
  camera: {
    flex: 1,
    paddingLeft: 20,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
