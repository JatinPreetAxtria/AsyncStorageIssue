import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import * as color from '../values/Colors';

const NoData = ({msg}) => {

    return (
        <View style={{
            flex: 1, backgroundColor: color.darker_blue,
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
            {/* <Image source={require('../assets/drawable/stock_icon.png')}/> */}
            <Text style={{fontSize: 14, color: 'white'}}>
                {msg}
            </Text>
        </View>
    );
};

export default NoData;