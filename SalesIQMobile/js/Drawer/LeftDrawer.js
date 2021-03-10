import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView} from "react-navigation";
import {Colors, ImageAssests, Strings} from '../value';
import {Utility} from "../util";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
 import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    SalesIqContainer, SalesIqPlanContainer
} from "../Screen/index";

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    icon1: {
        width: 22,
        height: 22,
    },
    iconStyle: {
        width: 28,
        height: 28
    },
    tabIconView: {
        height: 40,
        width: 40,

        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        //position:'absolute',
        backgroundColor: Colors.tab_icon_background,

    },
    tabIconViewContainer: {
        height: 60,
        width: 60,
        // elevation:2,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        //position:'absolute',
        padding: 5,

        marginTop: -12,

        backgroundColor: Colors.tab_background
    },

});

const CustomDrawerContentComponent = (props) => (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.color_primary}}
                  forceInset={{top: 'always', horizontal: 'never'}}>
        <ScrollView alwaysBounceVertical={false} style={{backgroundColor: '#dddddd'}}>
            <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={() => {
                //console.log("profileScreenProp",props);
                // old profile link :  props.navigation.navigate('profileScreen');
                props.navigation.navigate('profileContainer');
                Utility.showLogoutDialog(props)
            }}>
                <View
                    style={{
                        padding: 15,
                        backgroundColor: Colors.OTHER_CLIENT_COLOR,
                        height: 160,
                        flexDirection: 'column-reverse'
                    }}
                >

                    <Text style={{
                        color: Colors.card_bg,
                        fontSize: 14
                    }}>{props.route.paramss.userEmail}

                    </Text>

                    <Text style={{
                        color: Colors.card_bg,
                        marginTop: 16,
                        fontSize: 14
                    }}>{props.route.params.userName}
                    </Text>
                    <Image
                        source={{uri: props.route.params.navigationBarLogo}}
                        style={[{width: 95, height: 33}]}
                    />
                </View>
            </TouchableOpacity>
            <DrawerItems contentOptions={{
                activeBackgroundColor: Colors.ACTIVE_BACKGROUND_DRAWER,
                inactiveBackgroundColor: Colors.INACTIVE_BACKGROUND_DRAWER
            }} {...props} />

            <TouchableOpacity
                onPress={() => Utility.showLogoutDialog(props)}>
                <View style={{alignItems: 'center', flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 10}}>
                    <Image
                        source={require('../../assets/drawable/ic_lock_outline_black_18dp.png')}
                        style={{
                            width: 26,
                            height: 26,
                            marginLeft: 15
                        }}
                    />
                    <Text style={{
                        fontWeight: 'bold',
                        marginLeft: 30,
                        color: Colors.black,
                        fontFamily: Strings.APP_FONT
                    }}>Logout</Text>
                </View>
            </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>

);

setNavigationLogoURL = (strURL) => {
    if (!Utility.isEmptyChk()) {
        return (
            <Image
                source={require('../../assets/drawable/nav_bar_logo_offline.png')}
                style={[{width: 95, height: 33}]}
            />);
    } else {
        return (
            <Image
                source={{uri: props.route.params.navigationBarLogo}}
                style={[{width: 95, height: 33}]}
            />);
    }
}




const LeftDrawer = createDrawerNavigator(
    {
        SalesIq: {
            screen: SalesIqContainer,
            navigationOptions: {
                title: "SalesIqContainer",
                drawerIcon: ({tintColor}) => (
                    <Image
                        source={require('../../assets/drawable/ic_home_black_18dp.png')}
                        style={[styles.icon]}
                    />
                )
            },
        },

        SalesIqPlan: {
            screen: SalesIqPlanContainer,
            navigationOptions:
                {
                    title: 'SalesIqPlanContainer',
                    drawerIcon: ({tintColor}) => (
                        <Image
                            source={require('../../assets/drawable/ic_your_bids.png')}
                            style={[styles.icon]}
                        />
                    )
                }
        },

     
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            labelStyle: {
                fontFamily: Strings.APP_FONT,
            },
            activeTintColor: Colors.black,
            activeBackgroundColor: Colors.ACTIVE_BACKGROUND_DRAWER,
            inactiveBackgroundColor: Colors.INACTIVE_BACKGROUND_DRAWER
        }
    }
);

export {LeftDrawer}