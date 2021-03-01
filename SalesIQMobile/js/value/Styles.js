import {StyleSheet, Platform} from 'react-native';
import * as Colors from "./Colors";
// import { TabNavigator } from "react-navigation";

export const _ActionBarStyle = StyleSheet.create({
    content: {height: Platform.OS === "ios" ? 44:56, justifyContent: 'center', alignItems: "center", backgroundColor: Colors.color_primary},
    titleContainer: {marginTop:-5,height:30,alignItems: 'flex-start', justifyContent: 'center'},
    titleContainer1: {marginTop:(Platform.OS == "ios") ? 0 : -10,height:30,alignItems: 'flex-start', justifyContent: 'center'},
    title: {fontSize: 16, fontWeight:'400', marginLeft:0,color:Colors.white_80},
    icon: {marginTop:(Platform.OS == "ios")?0:0,resizeMode: 'contain', width:24, height:24},
    iconBack: {marginTop:(Platform.OS == "ios")?0:-5,resizeMode: 'contain', width:24, height:24},
    i_container: {width: 50, height: 50, justifyContent: 'center', alignItems: 'center',},
    other_client_content: {height: Platform.OS === "ios" ? 64: 56, justifyContent: 'center', alignItems: "center", backgroundColor: Colors.OTHER_CLIENT_COLOR},
    rightIconContainerStyle: {marginRight:0}
});

export const _ActivityStyle = StyleSheet.create({

    value:{
        backgroundColor:Colors.screen_background_color,
        position:'absolute',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        bottom : 0,
        top :0,
        right : 0,
        left :0
    }
});

export const _AppTitleStyle = StyleSheet.create({
   appTitleStyle: {
        marginTop:-5,
        width:26,
        height:26,
        justifyContent:'center',
        alignItems:'center'}
})

export const tabBarStyle = {

    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
        },
    }),
   // ...TabNavigator.Presets.AndroidTopTabs,
    tabBarPosition: 'top',
    tabBarOptions: {
        upperCaseLabel: false,
        activeTintColor: '#f23d18',
        inactiveTintColor: 'white',
        showIcon: false,
        showLabel: true,
        indicatorHeight: 2,

        labelStyle: {
            fontSize: 16,

        },
        tabStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        indicatorStyle: {

            backgroundColor: '#f23d18',
        },
        style: {
            backgroundColor: Colors.color_primary,

        },
        

    },

}

export const tabBarStyleForOtherClient = {

    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
        },
    }),
   // ...TabNavigator.Presets.AndroidTopTabs,
    tabBarPosition: 'top',
    tabBarOptions: {
        upperCaseLabel: false,
        activeTintColor: '#ffffff',
        inactiveTintColor: 'white',

        showIcon: false,
        showLabel: true,
        indicatorHeight: 2,

        labelStyle: {
            fontSize: 16,

        },
        tabStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        indicatorStyle: {

            backgroundColor: '#ffffff',
        },
        style: {
            backgroundColor: Colors.OTHER_CLIENT_COLOR,


        },


    },

}