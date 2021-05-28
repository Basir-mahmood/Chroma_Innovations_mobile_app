import * as React from 'react';
import { View, Text, StyleSheet, Image, Alert, Dimensions } from 'react-native';
import { DeviceMotion, Gyroscope } from 'expo-sensors';
import Svg, { Rect } from 'react-native-svg';
// import * as Permissions from 'expo-permissions';


class MotionDetect extends React.Component {

    state = {
        dm: null,
        initial: null,
        rect_start_x: Dimensions.get('window').width / 8,
        rect_start_y: Dimensions.get('window').height / 10,
        rect_width: Dimensions.get('window').width * 6 / 8,
        rect_height: Dimensions.get('window').height * 8 / 10,
    }




    componentDidMount() {

        Gyroscope.addListener(motion => {
            this.setState(
                oldState => ({
                    dm: motion,
                    initial: oldState.initial ? oldState.initial : motion,
                    rect_start_x: oldState.rect_start_x - (motion.y * 5),
                    rect_start_y: Dimensions.get('window').height / 10,
                    rect_width: Dimensions.get('window').width * 6 / 8,
                    rect_height: Dimensions.get('window').height * 8 / 10,


                })
            );
            // console.log(Math.trunc(motion.x), Math.trunc(motion.y), Math.trunc(motion.z))
            // Alert.alert(JSON.stringify(motion))

        });
        Gyroscope.setUpdateInterval(16);
    }
    componentWillUnmount() {
        Gyroscope.removeAllListeners()
    }
    render() {


        // let angle = 0;
        // if (
        //     this.state.dm &&
        //     this.state.dm.rotation &&
        //     this.state.dm.rotation.alpha
        // ) {
        //     angle = this.state.dm.rotation.alpha;
        // }
        // angle -= initial_angle

        return (<View style={{ flex: 1 }}>

            <Svg width="100%" height="200%">

                <Rect
                    x={this.state.rect_start_x}
                    y={this.state.rect_start_y}
                    width={this.state.rect_width}
                    height={this.state.rect_height}
                    strokeWidth="3"
                    stroke="rgb(255,0,0)"
                />
            </Svg>
        </View>)
    }

}

export default MotionDetect;