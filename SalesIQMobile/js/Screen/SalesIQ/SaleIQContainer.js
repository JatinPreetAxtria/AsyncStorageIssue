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
import SalesIQScreen from './SalesIQScreen';
// import ContactCell from './ContactCell';
import axios from 'axios';
import {BaseComponent,ACTION_TYPE_DRAWER} from '../../BaseComponent/BaseComponent'
import { Utility } from '../../util';



// Global sequence number, incremented every time a query is run
var seq = 0;

export default class SaleIQContainer extends React.Component {
    static navigationOptions = {

        drawerLabel: () => null
    }
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
    componentDidMount(){
        Utility.log("this.props ==",this.props)
    }
    render() {
        return (
            <BaseComponent
            leftButtonAction={ACTION_TYPE_DRAWER}
            navigation={this.props.navigation}
            title={"SalesIQ"}>
                {/* <WithLoading */}
                {/* //     screenState={this.state.screenState}
                //     // onRetry={this.onRetryClick}
                //     > */}

                <SalesIQScreen
                    data={this.state}
                />
                </BaseComponent>

                // </WithLoading>
        )
    }
}