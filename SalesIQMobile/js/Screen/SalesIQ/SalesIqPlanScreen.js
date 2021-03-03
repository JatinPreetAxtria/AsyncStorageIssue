import React from 'react';
import {
    Alert,
    View,
    FlatList,
    Keyboard,
    TouchableOpacity,
    Text,StyleSheet
} from 'react-native';
import { SearchBar, Icon} from 'react-native-elements';
import NavImgButton from '../../NavImgButton';
// import ContactScreen from './ContactScreen';
// import ContactCell from './ContactCell';
import axios from 'axios';


// Global sequence number, incremented every time a query is run
var seq = 0;

export default class SalesIqPlanScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            filter: '',
            data: [
                { 
                    'quater':'1  2021 plan',
                    'status': 'Refinement Pending',
                    'Date' :'Dec 15,2020'

                },
                {
                    'quater':'4  2021 plan',
                    'status': 'Finalized',
                    'Date' :'Sep 15,2020'

                }

            ],
            queryNumber: 0
        };
       
    }
    render() {
        return (
          
            <View style ={{backgroundColor: 'red',flex: 1,justifyContent: 'center',alignContent: 'center'}}>
            <Text>This is SalesIq Screen</Text>
                   </View>
        )
    }
}