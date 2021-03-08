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
  SalesIqContainer,SalesIqScreen,SalesIqPlanContainer,SalesIqPlanScreen,SearchScreen,CallPlanUpdate,Callplan,ContactBadge,ContactScreen,ContactCell
} from '../Screen/index'
import { name as appName } from '../../app.json';
import { ImageAssests, Colors, Strings } from '../value/index';
import * as Utility from '../util/Utility';
const DashboardStack = createStackNavigator();

function DashboardStackScreen(props) {
   Utility.log('DashboardStackScreen :', props);
  //let route = props.route;
  //Utility.log('DashboardStackScreen routs', route);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.color_primary }}>
    <DashboardStack.Navigator
    initialRouteName="SalesIqContainer"
    >
       <DashboardStack.Screen
        name="SalesIqContainer"
        component={SalesIqContainer}
        options={{headerShown: false}}
       //initialParams={props.route.params}
      />
      <DashboardStack.Screen
        name="SalesIqPlanContainer"
        component={SalesIqPlanContainer}
        options={{headerShown: false}}
       //initialParams={props.route.params}
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

