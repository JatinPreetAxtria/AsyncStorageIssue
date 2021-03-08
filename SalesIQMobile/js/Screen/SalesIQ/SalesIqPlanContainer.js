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
 import SalesIqPlanScreen from './SalesIqPlanScreen';
// import ContactCell from './ContactCell';
import axios from 'axios';


// Global sequence number, incremented every time a query is run
var seq = 0;

export default class SalesIqPlanContainer extends React.Component {
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
          
                // <WithLoading
                //     screenState={this.state.screenState}
                //     // onRetry={this.onRetryClick}
                //     >

                <SalesIqPlanScreen
                    data={this.state}
                />

                // </WithLoading>
        )
    }
}