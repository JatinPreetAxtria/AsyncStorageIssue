import React from 'react';
import {
    Alert,
    View,
    FlatList,
    Keyboard,
    TouchableOpacity,
    Text,StyleSheet,SectionList
} from 'react-native';
import { SearchBar, Icon} from 'react-native-elements';
import NavImgButton from '../../NavImgButton';
// import ContactCell from './ContactCell';
import axios from 'axios';


// Global sequence number, incremented every time a query is run
var seq = 0;
var section_data = [
    {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
    },
    {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
    },
    {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
    }
    ];

export default class SalesIQScreen extends React.Component {
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
    item = ({item}) => {
            return (
                <View>
                    <Text>{item}</Text>
                    </View>
            )

    }
    render() {
       
        return (
          
            <View style ={{backgroundColor: 'lightgray',flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                   <Text>This is SalesIq Screen</Text>
                   </View>
        )
    }
}