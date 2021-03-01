import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import * as Colors from '../value/Colors';

const NoDataComponent = ({message,subMessage,icon}) => {

    return (
        <View style = {styleContent.viewStyle}>
            <Image style={{height:100, width:100, tintColor:Colors.orange_color}} source={icon}/>
            <Text style={styleContent.textTitleStyle}>{message}</Text>
            <Text style={styleContent.textSubTitleStyle}>{subMessage?subMessage:""}</Text>
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
        right:0
    },
    textTitleStyle : {
        paddingTop:24,
        color: Colors.no_data_found,
        fontSize: 22,
        alignItems:'center'
    },

    textSubTitleStyle : {
        paddingTop:16,
        color: Colors.no_data_found,
        fontSize: 12,
        alignItems:'center'
    }

});
export default NoDataComponent;