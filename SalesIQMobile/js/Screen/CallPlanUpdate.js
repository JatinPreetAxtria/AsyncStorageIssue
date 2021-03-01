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
    Text, StyleSheet,
    TextInput,ScrollView
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import NavImgButton from '../NavImgButton';
// import ContactScreen from './ContactScreen';
// import ContactCell from './ContactCell';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'


// Global sequence number, incremented every time a query is run
var seq = 0;

class CallPlanUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            filter: '',
            data: [
                {
                    'quater': '1  2021 plan',
                    'status': 'Refinement Pending',
                    'Date': 'Dec 15,2020'

                },
                {
                    'quater': '4  2021 plan',
                    'status': 'Finalized',
                    'Date': 'Sep 15,2020'

                }

            ],
            queryNumber: 0,
            f2f: '',
            email: '',
            meetings: '',
            segment: '',
            updatePreference: '',
            selectReason: '',
            comments: '',

        };
        
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            title: 'Sales IQ',
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
<KeyboardAwareView animated={true}>
            <View style={{ flex: 1, padding: 20, }}>
                <ScrollView>
                <View style={{ backgroundColor: 'white', height: 200, marginBottom: 10, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'lightgrey', flex: 1, margin: 10, flexDirection: 'column' }}>
                        <Text style={styles.item}>{'Customer Name:'}</Text>
                        <Text style={styles.item}>{'Customer Address:'}</Text>

                        <Text style={styles.item}>{'Address'}</Text>
                    </View>
                    <View style={{ backgroundColor: 'lightgrey', flex: 1, margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[{ fontStyle: 'italic' }, styles.item]}>{'Customer Stats'}</Text>

                    </View>
                </View>
                <View style={{ backgroundColor: 'lightgrey', height: 200, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[{ fontStyle: 'italic' }, styles.item]}>{'Customer Stats'}</Text>

                </View>
                <View style={{ flexDirection: 'row',marginTop:20 }}>
                    <Text style={styles.item}>{'Target:'}</Text>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                        <TextInput
                            style={styles.textInputStyle}
                            value={this.state.f2f}
                            onChangeText={text => {
                                this.setState(
                                    {
                                        f2f: text
                                    }
                                )
                            }}
                            placeholder={'F2F'}
                            placeholderTextColor={'black'}


                        />
                        <Text style={styles.item}>{'F2F'}</Text>
                      </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                        <TextInput
                            style={styles.textInputStyle}
                            value={this.state.email}
                            onChangeText={text => {
                                this.setState(
                                    {
                                        email: text
                                    }
                                )
                            }}
                            placeholder={'Email'}
                            placeholderTextColor={'black'}

                        />
                        <Text style={styles.item}>{'Email'}</Text>
                     </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                        <TextInput
                            style={styles.textInputStyle}
                            value={this.state.meetings}
                            onChangeText={text => {
                                this.setState(
                                    {
                                        meetings: text
                                    }
                                )
                            }}
                            placeholder={'Meetings'}
                            placeholderTextColor={'black'}

                        />
                        <Text style={styles.item}>{'Meetings'}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row',marginTop:40 }}>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={styles.item}>{'Segment'}</Text>

                        <TextInput
                            style={[{borderRightWidth:0},styles.textInputStyle]}
                            value={this.state.segment}
                            onChangeText={text => {
                                this.setState(
                                    {
                                        segment: text
                                    }
                                )
                            }}
                            placeholder={'Upadate Segment'}
                            placeholderTextColor={'black'}


                        />
                    <View style={{ borderColor: 'black',borderWidth: 2,height:50,paddingTop:10,borderLeftWidth:0}}>    
                    <Icon size={28} name={'arrow-down-drop-circle'} type={'material-community'} color='black' underlayColor='black' style={{color:'black'}}  />
                    </View>
                      </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={styles.item}>{'Accesibilty'}</Text>

                        <TextInput
                            style={[{borderRightWidth:0},styles.textInputStyle]}
                            value={this.state.updatePreference}
                            onChangeText={text => {
                                this.setState(
                                    {
                                        updatePreference: text
                                    }
                                )
                            }}
                            placeholder={'UpdatePreference'}
                            placeholderTextColor={'black'}

                        />
                         <View style={{ borderColor: 'black',borderWidth: 2,height:50,paddingTop:10,borderLeftWidth:0}}>    
                    <Icon size={28} name={'arrow-down-drop-circle'} type={'material-community'} color='black' underlayColor='black' style={{Color:'black'}}  />
                    </View>
                     </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                    <Icon size={28} name={'checkbox-marked'} type={'material-community'} color='black' underlayColor='black' style={{Color:'black'}}  />

                        <Text style={styles.item}>{'shared Customer'}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row',marginTop:40 }}>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={styles.item}>{'Reason'}</Text>

                        <TextInput
                            style={[{height:50,borderRightWidth:0},styles.textInputStyle]}
                            value={this.state.selectReason}
                            onChangeText={text => {
                                this.setState(
                                    {
                                        selectReason: text
                                    }
                                )
                            }}
                            placeholder={'Select reason'}
                            placeholderTextColor={'black'}


                        />
                         <View style={{ borderColor: 'black',borderWidth: 2,height:50,paddingTop:10,borderLeftWidth:0}}>    
                    <Icon size={28} name={'arrow-down-drop-circle'} type={'material-community'} color='black' underlayColor='black' style={{Color:'black'}}  />
                    </View>
                      </View>
                    <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 10, paddingRight: 10 }}>

                        <TextInput
                            style={[{height:80},styles.textInputStyle]}
                            value={this.state.comments}
                            onChangeText={text => {
                                this.setState(
                                    {
                                        comments: text
                                    }
                                )
                            }}
                            placeholder={'Comments'}
                            placeholderTextColor={'black'}

                        />
                     </View>
                    

                </View>




                </ScrollView>

            </View>
            </KeyboardAwareView>
            
        );
    }

    
}

export default CallPlanUpdate;
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
    textInputStyle: {
        flex: 1,
        margin: 0,
        // backgroundColor:'white',
        fontSize: 18,
        padding:0,
        // height: 40,
        paddingLeft: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 0
    }
});
