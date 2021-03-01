/*
 * Copyright (c) 2015-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React from 'react';
import {
    Alert,
    View,
    FlatList,
    Keyboard,
    TouchableOpacity,
    Text, StyleSheet
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import NavImgButton from '../NavImgButton';
// import ContactScreen from './ContactScreen';
// import ContactCell from './ContactCell';
// import * as DBFunctions from './database/DBFunction'
// import * as DBConstants from './database/Constants'
import { Strings, ImageAssets } from '../value/index'

// Global sequence number, incremented every time a query is run
var seq = 0;

class SalesIqPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            filter: '',
            data: [
                {
                    "ID": 1,
                    'name': 'Dr Adi ChandraShekar',
                    'address': 'Freeway Boston',
                    'clinicName': 'Freeway Health',
                    'F2Fconnect':'12F2F',
                    'NumberOfemails':'2 Emails',
                    'NumberOfMeeting':'1 Meetings',
                    'callStatus':'Call Updated'
                },
                {
                    "ID": 2,
                    'name': 'Dr Simi Chakorborty',
                    'address': 'Framington',
                    'clinicName': 'GbGastro',
                    'F2Fconnect':'18F2F',
                    'NumberOfemails':'',
                    'NumberOfMeeting':'',
                    'callStatus':''
                },
                {
                    "ID": 3,
                    'name': 'Dr Eric Walker',
                    'address': 'Dorchester',
                    'clinicName': 'BMC',
                    'F2Fconnect':'12F2F',
                    'NumberOfemails':'2 Emails',
                    'NumberOfMeeting':'1 Meeting',
                    'callStatus':''
                },
                {
                    "ID": 4,
                    'name': 'Dr Saif Kaizal',
                    'address': 'Somerville',
                    'clinicName': 'Harvard Med School',
                    'F2Fconnect':'12F2F',
                    'NumberOfemails':'2 Emails',
                    'NumberOfMeeting':'1 Meeting',
                    'callStatus':''
                },
                {
                    "ID": 5,
                    'name': 'Dr Simone Vertone',
                    'address': 'Cambridge',
                    'clinicName': 'Mass general',
                    'F2Fconnect':'12F2F',
                    'NumberOfemails':'2 Emails',
                    'NumberOfMeeting':'1 Meeting',
                    'callStatus':''
                },
                {
                    "ID": 6,
                    'name': 'Dr Jeffery Wormuth',
                    'address': 'Boston',
                    'clinicName': 'Tufts',
                    'F2Fconnect':'12F2F',
                    'NumberOfemails':'2 Emails',
                    'NumberOfMeeting':'1 Meeting',
                    'callStatus':'Call Updated'
                },
                {
                    "ID": 7,
                    'name': 'Dr Fablo Chen',
                    'address': 'Waltham',
                    'clinicName': 'Partners',
                    'F2Fconnect':'12F2F',
                    'NumberOfemails':'2 Emails',
                    'NumberOfMeeting':'1 Meeting',
                    'callStatus':'Added'
                },
                
                

            ],
            queryNumber: 0
        };
       
    }

    componentDidMount() {
        let name = this.state.data[0].name
        let callStatus = this.state.data[0].callStatus
        let salesAdd = this.state.data[0].address
        let salesID = this.state.data[0].ID
        console.log('localImageArray ******** ', name,callStatus,salesAdd,salesID)

        // DBFunctions.insertProcessingStatus(salesID, name,salesAdd ,callStatus,
        //     function callback(respCode) {
        //         switch (respCode) {
        //             case Strings.IMAGE_PROCESSING_SAVE_SUCCESS:
        //                 break
        //             case Strings.IMAGE_PROCESSING_SAVE_FAILURE:
        //                 break
        //         }
        //     })

        // let objectDDDD = DBFunctions.getProcessingStatus()
        // let statuForpddItem = DBFunctions.generateSimpleList(objectDDDD);
        // console.log('statuForpddItem == ******** ', objectDDDD,statuForpddItem)

        this.props.navigation.setOptions({
            title: 'SalesIQ',
            headerLeft: () => (<NavImgButton icon='arrow-back' color='white' onPress={() => this.onBack()} />),

            headerRight: () => (
                <View style={styles.navButtonsGroup}>
                    
                </View>
            )
        });
       
    }
    onBack() {
        const navigation = this.props.navigation;

            navigation.pop()
        
    }

    

    render() {
        return (
            <View style={{ flex: 1, padding: 20, }}>
                <View style={{ backgroundColor: 'white', height: 200, marginBottom: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'lightgrey', flex: 1, margin: 10, flexDirection: 'column' }}>
                        <Text style={styles.item}>{'Cycle Details:'}</Text>
                        <Text style={styles.item}>{'Status:'}</Text>

                        <Text style={styles.item}>{'Window period:'}</Text>
                        <Text style={styles.item}>{'Teritory Details:'}</Text>


                    </View>
                    <View style={{ backgroundColor: 'lightgrey', flex: 1, margin: 10 }}>
                        <Text style={styles.item}>{'Total Customers:'}</Text>
                        <Text style={styles.item}>{'Added:'}</Text>

                        <Text style={styles.item}>{'Dropped:'}</Text>

                    </View>
                    <View style={{ backgroundColor: 'lightgrey', flex: 1, margin: 10 }}>
                        <Text style={styles.item}>{'Total Calls:'}</Text>
                        <Text style={styles.item}>{'Added:'}</Text>

                        <Text style={styles.item}>{'Dropped:'}</Text>
                    </View>
                    <View style={{ backgroundColor: 'lightgrey', flex: 1, margin: 10 }}>
                        <Text style={styles.item}>{'Other stats:'}</Text>

                    </View>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item}>{'Planned Customers'}</Text>
                    <View style={{ backgroundColor: 'black', width: 4, height: 40 }}></View>
                    <Text style={[{ color: 'blue', textDecorationLine: 'underline' }, styles.item]}>{'My Customers'}</Text>
                    <View style={{ backgroundColor: 'black', width: 4, height: 40 }}></View>
                    <Text style={[{ color: 'blue', textDecorationLine: 'underline' }, styles.item]}>{'Team Universe'}</Text>




                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                        onPress ={() =>{this.props.navigation.navigate('CallPlanUpdate')} }
                        style={{backgroundColor:'lightgrey',marginBottom:10,padding:10,flexDirection:'row',marginTop:10}}
                        >
                             <View style={[styles.circle, {backgroundColor: 'white'}]}>
                  <Text style={styles.initials}>{'A'}</Text>
                </View>   
                        <Text style={[{flex:2/7},styles.itemstyle]}>{ item.name}</Text>
                        <Text style={[{flex:1/7},styles.item]}>{ item.address}</Text>
                        <Text style={[{flex:1/7},styles.item]}>{ item.clinicName}</Text>
                        <Text style={[{flex:1/7},styles.item]}>{ item.F2Fconnect}</Text>
                        <Text style={[{flex:1/7},styles.item]}>{ item.NumberOfemails}</Text>
                        <Text style={[{flex:1/7},styles.item]}>{ item.NumberOfMeeting}</Text>
                        <Text style={[{flex:1/7,color:'green'},styles.item]}>{ item.callStatus}</Text>




                        
       
                       </TouchableOpacity>
                      
                       )}
                       keyExtractor={(item, index) => 'key_' + index}
                    
                    />


            </View>
        );
    }

   

    

    

    


    

    
}

export default SalesIqPlan;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'white',
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    item: {
        padding: 10,
        fontSize: 22,
        flexWrap: 'wrap',




    },
    itemstyle: {
        padding: 10,
        fontSize: 22,

        fontWeight: 'bold',


    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width:50,
        height:50,
        borderRadius: 25,
        backgroundColor:'#1abc9c',
        marginRight:5
    },
    initials: {
        fontSize:22,
        color:'lightgrey',
        backgroundColor:'transparent',
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
    }
});
