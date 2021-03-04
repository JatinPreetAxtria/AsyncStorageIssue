/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity,Animated,Dimensions, Image, Modal, PermissionsAndroid, SafeAreaView, StyleSheet, Text, View, Platform} from 'react-native';
import {
  SalesIqContainer,SalesIqScreen,SalesIqPlanContainer,SalesIqPlanScreen,SearchScreen,CallPlanUpdate,Callplan,ContactBadge,ContactScreen,ContactCell
} from '../Screen/index'
import * as BaseComponent from "../BaseComponent/BaseComponent"
import { name as appName } from '../../app.json';
import { ImageAssests, Colors, Strings } from '../value/index';
import * as Utility from '../util/Utility';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';

const DashboardStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer()
        }}>
        {/* <Text>Open</Text> */}
        <Image
      style={{ width: 50, height: 50 }}
      source={ImageAssests.icon_drawer}
    />   
      </TouchableOpacity>
    </View>
  );
};


function DashboardStackScreen(props) {
   Utility.log('DashboardStackScreen :', props);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.color_primary }}>
    <DashboardStack.Navigator
    initialRouteName="SalesIqContainer"
    
    >
       <DashboardStack.Screen
        name="SalesIqContainer"
        component={SalesIqContainer}
        options={{
          headerStyle: {
            backgroundColor: Colors.submit_button,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: ({}) => <HeaderLeft />
        }}
       //initialParams={props.route.params}
      />
      <DashboardStack.Screen
        name="SalesIqPlanContainer"
        component={SalesIqPlanContainer}
        options={{headerShown: true}}
       //initialParams={props.route.params}
      />
      
      <DashboardStack.Screen
        name="Callplan"
        component={Callplan}
        options={{headerShown: true}}
      //  initialParams={props.route.params}
      />
      <DashboardStack.Screen
        name="CallPlanUpdate"
        component={CallPlanUpdate}
        options={{headerShown: true}}
      //  initialParams={props.route.params}
      />
     
       
    </DashboardStack.Navigator>
    </View>
  );
}
const DrawerNavigator = () => {
  return (

<Drawer.Navigator
drawerStyle={{
  backgroundColor: Colors.white,
  width: 240,
}}
>
<Drawer.Screen name="SalesIqContainer" component={DashboardStackScreen} />
<Drawer.Screen name="ContactScreen" component={ContactScreen} />
</Drawer.Navigator>
  )
}

const AppNavigator = (props) => {
  return <DrawerNavigator
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

