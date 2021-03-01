/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Animated,Dimensions, Image, Modal, PermissionsAndroid, SafeAreaView, StyleSheet, Text, View, Platform} from 'react-native';
import {
  SalesIq,SalesIqPlan,SearchScreen,CallPlanUpdate,Callplan,ContactBadge,ContactScreen,ContactCell
} from '../Screen/index'
// import { LeftDrawer } from '../screen/Drawer/LeftDrawer'
import { name as appName } from '../../app.json';
import { ImageAssests, Colors, Strings } from '../value/index';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Utility from '../util/Utility';
// import RemotePushController from "../services/RemotePushController";

// const Tab = createBottomTabNavigator();
const DashboardStack = createStackNavigator();

function DashboardStackScreen(props) {
   Utility.log('DashboardStackScreen :', props);
  // let route = props.route;
  //Utility.log('DashboardStackScreen routs', route);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.color_primary }}>
    <DashboardStack.Navigator
    initialRouteName="SalesIq"
    >
       <DashboardStack.Screen
        name="SalesIq"
        component={SalesIq}
        options={{headerShown: false}}
      //  initialParams={props.route.params}
      />
      <DashboardStack.Screen
        name="SalesIqPlan"
        component={SalesIqPlan}
        ScreenOptions={{tabBarVisible: false}}
        options={{headerShown: false}}
        // initialParams={props.route.params}
      />
      
      <DashboardStack.Screen
        name="Callplan"
        component={Callplan}
        options={{headerShown: false}}
      //  initialParams={props.route.params}
      />
      <DashboardStack.Screen
        name="CallPlanUpdate"
        component={CallPlanUpdate}
        options={{headerShown: false}}
      //  initialParams={props.route.params}
      />
     
       
    </DashboardStack.Navigator>
    </View>
  );
}



const AppNavigator = (props) => {
  return <DashboardStackScreen
  data={props}
   />;
};
const styles = StyleSheet.create({
  icon: {
      width: 26,
      height: 26,
  },
  iconStyle: {
      width: 26,
      height: 26
  },
  tabIconView: {
      height: 40,
      width: 40,

      // borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      //position:'absolute',
      backgroundColor: Colors.darker_blue,

  },
  tabIconViewContainer: {
      height: 30,
      width: 30,
      elevation:2,
      // borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      //position:'absolute',
      // padding: 5,
      marginTop: 5 ,
      // backgroundColor: 'yellow'
  },

});
export default AppNavigator;

