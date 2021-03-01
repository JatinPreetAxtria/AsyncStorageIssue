import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView} from "react-navigation";
import {Colors, ImageAssests, Strings} from '../value';
import {Utility} from "../util";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';

import {
    SalesIq, SalesIqPlan,Callplan
} from "..";

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


// const TabNavigator = createBottomTabNavigator({
//     Profile: {
//         screen: ProfileContainer,
//         navigationOptions: ({navigation}) => ({
//             header: null,
//             title: "Profile",
//             tabBarIcon: ({focused, tintColor}) => (
//                 <View style={focused ? styles.tabIconViewContainer : ""}>
//                     <View style={focused ? styles.tabIconView : ""}>
//                         <Image source={ImageAssests.icon_profile}
//                                style={[styles.iconStyle, {tintColor: focused ? Colors.orange_color : Colors.gray}]}/>
//                     </View>
//                 </View>
//             )
//         })
//     },

//     History: {
//         screen: HistoryContainer,
//         navigationOptions: {
//             header: null,
//             title: "History",
//             tabBarIcon: ({focused, tintColor}) => (
//                 <View style={focused ? styles.tabIconViewContainer : ""}>
//                     <View style={focused ? styles.tabIconView : ""}>
//                         <Image source={ImageAssests.history_icon}
//                                style={[styles.iconStyle, {tintColor: focused ? Colors.orange_color : Colors.gray}]}/>
//                     </View>
//                 </View>
//             )
//         }
//     },
//     LiveCars: {
//         screen: VehicleListContainer,
//         navigationOptions: {
//             header: null,
//             title: "Live Car",
//             tabBarIcon: ({focused, horizontal, tintColor}) => (
//                 <View style={focused ? styles.tabIconViewContainer : ""}>
//                     <View style={focused ? styles.tabIconView : ""}>
//                         <Image source={ImageAssests.car_icon}
//                                style={[styles.iconStyle, {tintColor: focused ? Colors.orange_color : Colors.gray}]}/>
//                     </View>
//                 </View>
//             )
//         }
//     },


//     OneClickBuy: {
//         screen: OneClickBuyContainer,
//         navigationOptions: {
//             header: null,
//             title: "One Click Buy",
//             tabBarIcon: ({focused, tintColor}) => (
//                 <View style={focused ? styles.tabIconViewContainer : ""}>
//                     <View style={focused ? styles.tabIconView : ""}>
//                         <Image source={ImageAssests.one_click_buy_icon}
//                                style={[styles.iconStyle, {tintColor: focused ? Colors.orange_color : Colors.gray}]}/>
//                     </View>
//                 </View>
//             )
//         }
//     },
//     Wallet: {
//         screen: WalletContainer,
//         navigationOptions: {
//             header: null,
//             title: "Wallet",
//             tabBarIcon: ({focused, tintColor}) => (
//                 <View style={focused ? styles.tabIconViewContainer : ""}>
//                     <View style={focused ? styles.tabIconView : ""}>
//                         <Image source={ImageAssests.wallet_icon}
//                                style={[styles.iconStyle, {tintColor: focused ? Colors.orange_color : Colors.gray}]}/>
//                     </View>
//                 </View>
//             )
//         }
//     },


// }, {
//     // initialRouteName:'LiveCars',
//     initialRouteName: 'OneClickBuy',
//     tabBarOptions: {
//         activeTintColor: Colors.white,  // Color of tab when pressed
//         inactiveTintColor: Colors.gray, // Color of tab when not pressed
//         showIcon: 'true', // Shows an icon for both iOS and Android
//         labelStyle: {
//             fontSize: 11,
//             fontFamily: Strings.APP_FONT,
//             marginTop: 0
//         },
//         style: {
//             paddingTop: 5,
//             //paddingBottom: 5,
//             backgroundColor: Colors.tab_background, // Makes Android tab bar white instead of standard blue
//             height: (Platform.OS === 'ios') ? 48 : 50, // I didn't use this in my app, so the numbers may be off.
//         },
//     },
// });

const LeftDrawer = createDrawerNavigator(
    {
        SalesIq: {
            screen: SalesIq,
            navigationOptions: {
                title: "SalesIq",
                drawerIcon: ({tintColor}) => (
                    <Image
                        source={require('../../assets/drawable/ic_home_black_18dp.png')}
                        style={[styles.icon]}
                    />
                )
            },
        },

        SalesIqPlan: {
            screen: SalesIqPlan,
            navigationOptions:
                {
                    title: Strings.yourBids,
                    drawerIcon: ({tintColor}) => (
                        <Image
                            source={require('../../assets/drawable/ic_your_bids.png')}
                            style={[styles.icon]}
                        />
                    )
                }
        },

        Callplan: {
            screen: Callplan,
            navigationOptions:
                {
                    title: Strings.yourWins,
                    drawerIcon: ({tintColor}) => (
                        <Image
                            source={require('../../assets/drawable/ic_thumb_up_black_18dp.png')}
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