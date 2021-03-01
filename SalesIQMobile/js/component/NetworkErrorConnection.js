import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Colors from '../values/Colors';
import * as ImageAssets from "../values/ImageAssest";

const NetworkErrorConnection = ({onRetryPress}) => {

    return (
        <View style = {styleContent.viewStyle}>
            <Image style={{height:100, width:100, tintColor:Colors.orange_color}} source={ImageAssets.icon_fav_active}/>
            <Text style={styleContent.textStyle}>
                No Internet Connection
            </Text>
            <Text style={styleContent.subTextStyle}>
                Please check internet connection and try again.
            </Text>
            <TouchableOpacity onPress={onRetryPress}>
                <Text style={styleContent.button}>
                    Retry
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styleContent = StyleSheet.create({

    viewStyle: {
        justifyContent:'center',
        flex:1,
        position:'absolute',
        backgroundColor:Colors.white,
        alignItems:'center',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
    textStyle : {
        color: Colors.black_40,
        fontSize: 20,
        alignItems:'center'
    },
    subTextStyle : {
        color: Colors.black_40,
        fontSize: 12,
        alignItems:'center'
    },
    button:{
        backgroundColor:Colors.orange_color,
        color:Colors.white,
        paddingVertical:10,
        paddingHorizontal:20,
        marginTop:10,
        fontSize:16
    }

});
export default NetworkErrorConnection;
