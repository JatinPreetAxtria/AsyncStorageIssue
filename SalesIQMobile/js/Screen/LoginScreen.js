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
    Switch,
    TouchableOpacity,
    Text,StyleSheet,TextInput,Image
} from 'react-native';
import { Constants,Utility } from '../util/index';

import { SearchBar, Icon, colors} from 'react-native-elements';
// import {oauth, net} from 'react-native-force';
import NavImgButton from '../NavImgButton';
// import ContactScreen from './ContactScreen';
// import ContactCell from './ContactCell';
import axios from 'axios';
import {ImageAssests} from "../value";
import { Strings, Colors, ImageAssets } from '../value/index';

import SalesIqStore from '../util/SalesIqStore';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// Global sequence number, incremented every time a query is run
var seq = 0;
// const { signIn } = React.useContext(Constants.AuthContext);

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            domain: '',
            refreshToken:'',
            email : 'kingshuk.kar@axtria.com.icdev', //jatinpreet.gujral@salesiq.com.mob
            password : 'King@2021',//ghost420
            checked: false,
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

     
//  async callApi() {
//   let response = {'name':'jatin'}
//     return response
  
    
// }

async  callApi(urlString, header, body, methodType, isMultipart) {
    console.log("-----------AXIOS  Api request is----------- ");
    console.log("url string " + urlString);
    console.log("header " + JSON.stringify(header));
    console.log("body " + JSON.stringify(body));
    console.log("methodType " + methodType)
  
    return axios({
      method: methodType, //you can set what request you want to be
      url: urlString,
    //   data: isMultipart ? body : methodType != "GET" ? JSON.stringify(body) : null,
      data:  JSON.stringify(body) ,

      headers: header
    }).then(res => {
      console.log("-----------AXIOS  Api Response is----------- ");
      console.log("url string " + urlString);
      console.log("header " + JSON.stringify(header));
      console.log("body " + JSON.stringify(body));
      console.log("methodType " + methodType)
      console.log(JSON.stringify("res.data", res.data));
      console.log(JSON.stringify("res.data", res));

   
     }
    )
      .catch(e => {
        console.log("-----------AXIOS  Api catch is-----------")
        console.log(e)
        console.log("catch Error" + JSON.stringify(e))
        
      }
      )
  }

   async componentDidMount() {
        // this.props.navigation.setOptions({
        //     title: 'Login',
        //     headerRight: () => (
        //             <View style={styles.navButtonsGroup}>
                    
        //             <NavImgButton icon='logout' iconType='material-community' onPress={() => this.onLogout()} />
        //             </View>
        //     )
        // });
       
    }

    onLoginClick = () =>{
        // this.props.navigation.navigate('SalesIq');
        // this.setState({showPassword: !this.state.showPassword});
        // var that = this;
        // saveDataAndProceed(response)
        // oauth.authenticate(
        //   (success) => this.fetchData(JSON.stringify(success)), // NEVER CALLED
        //   (error) => console.log('Failed to authenticate:' + error)
        //  );
        // oauth.getAuthCredentials(
        //     () => that.fetchData(), // already logged in, gets called after login because app refreshes and sees it's logged in
        //     () => {
        //         oauth.authenticate(
        //             () => that.fetchData(), // NEVER CALLED
        //             (error) => console.log('Failed to authenticate:' + error)
        //         );
        //     });
        // var param = {};
        // param['username'] = username
        // param['password'] = password

        // login(param, ((response) => {

        //     if (response.code == 200) {
        //         Utility.log(" response received", response)

        //         saveDataAndProceed(response)
        //     } else {
        //         Toast.show(response.message, Toast.SHORT)
        //         // setscreenState(ScreenStates.NO_ERROR)
        //     }
        // })
        // )
    }


    fetchData(Auth_Response) {
        var that = this;
        console.log('response to authenticate:' + Auth_Response)
                this.setState({refreshToken: Auth_Response.refreshToken}, () => {
                    this.props.navigation.navigate('SalesIq');
            })

        // net.query('SELECT Id, Name FROM Contact LIMIT 100',
        //           (response) => that.setState({data: response.records})
        //          );
    }
    render() {
        return (
                    <View style={{flex:1}}>
                    <View style={styles.logoStyle}>
                    <Image style={{height: 60, width: 351}} source={ImageAssests.Axtria_logo}/>
                    </View>

                    <View style={{justifyContent: 'center',alignItems: 'center',backgroundColor: 'transparent',marginTop:31}}>
                   
                     {/* Username textinput */}
                    <View>
                    <Text allowFontScaling={false} style={[styles.textStyle,{fontSize: 15,fontWeight: 'bold'}]}>{'Username/Email'}</Text>
                    <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.textInput}
                                returnKeyType='next'
                                keyboardType='email-address'
                                value={this.state.email}
                                placeholder= "Enter Username"
                                // placeholderTextColor={"black"}
                                autoCapitalize="none"
                                onChangeText={ (text) => this.setState({ email: text })
                            }                         
    //                                  { if (Utility.checkAlphaNumeric(text))
    //                                 this.setState({email:this.state.email})
    //                             else
    //                                 this.setState({ email: text })
    //  }}                          
       />
                            </View>
                            </View>
                              {/* Password textinput */}
                            <View style={{marginTop:27}}>
                            <Text allowFontScaling={false} style={[styles.textStyle,{fontSize: 15,fontWeight: 'bold'}]}>{'Password'}</Text>
                               <View style={styles.SectionStyle}>
                                <TextInput
                                style={styles.textInput}
                                returnKeyType='next'
                                keyboardType='email-address'
                                maxLength={10}
                                value={this.state.password}
                                // placeholder= "Password"
                                // placeholderTextColor={"black"}
                                autoCapitalize="none"
                                placeholder={'Enter Password'}
                                onChangeText={(text) => this.setState({password:text})}
                            />
                            {/* { this.state.email != '' && this.state.email.length > 6 ?<Image source={ImageAssests.right_icon} style={styles.ImageStyleEmailCopy} /> : null } */}
                        </View>
                        </View>
                         {/* Forgot Password button */}
                        <View style={{marginTop:6,height:30,width:'30%'}}>
                        <View style={styles.ButtonWithoutborderStyle}>
                        <TouchableOpacity
                         onPress={() => this.props.ForgotPassword(this.state.email, this.state.password)}>
                         <Text allowFontScaling={false} style={[styles.textStyle,{fontSize: 17,fontWeight: 'bold', color:Colors.submit_button}]}>{'Forgot Your Password?'}</Text>
                         </TouchableOpacity>
                            {/* { this.state.email != '' && this.state.email.length > 6 ?<Image source={ImageAssests.right_icon} style={styles.ImageStyleEmailCopy} /> : null } */}
                        </View>
                        </View>


                        {/* Domain textinput */}
                        <View style= {{backgroundColor: 'transparent',marginTop:30,flexDirection: 'column',
                         justifyContent: 'center',
                         height: 45,
                         marginTop:9,
                         width: '30%'
                    
                    }}>
                            {/* {{flexDirection: 'column', backgroundColor: 'transparent',marginTop:30}}> */}
                        <Text allowFontScaling={false} style={[styles.textStyle,{fontSize: 15,fontWeight: 'bold'}]}>{'Domain'}</Text>
                        <View style= {{flexDirection: 'row',alignItems:'center', backgroundColor: 'transparent',}}>

                        <View style={[styles.SectionStyle,{ width: '30%'}]}>
                                <TextInput
                                style={styles.textInput}
                                returnKeyType='next'
                                keyboardType='email-address'
                                maxLength={10}
                                value={this.state.domain}
                                // placeholder= "Domain"
                                // placeholderTextColor={"black"}
                                autoCapitalize="none"
                                onChangeText={ (text) => { console.log("login clicked")}}
                            /> 

                            {/* { this.state.email != '' && this.state.email.length > 6 ?<Image source={ImageAssests.right_icon} style={styles.ImageStyleEmailCopy} /> : null } */}
                        </View>
                        <Text allowFontScaling={false} style={[styles.textStyle,{fontSize: 16,fontWeight: 'bold',marginHorizontal:5}]}>{'.Axtria.salesIq.com'}</Text>
                        </View>
                        </View>
                       

                          {/* Remember me textinput */}

                        {/* <View style={{ width: 30, flexDirection: 'row',
                                        height: 45,
                                        marginTop:30,
                                        width: '40%',alignItems:'center'
                        }}>
                         <TouchableOpacity style={[{backgroundColor: Colors.white,alignSelf:'center',width:20,height:20,borderWidth:1,borderColor:'black'}]}
                         onPress={() => this.props.RememberMe(this.state.email, this.state.password, this.state.domain)}>
                        { this.state.email != '' && this.state.email.length > 6 ?<Image source={ImageAssests.icon_right} style={styles.ImageStyleEmailCopy} /> : null } 
                         </TouchableOpacity>
                        <Text allowFontScaling={false} style={[styles.textStyle,{fontSize: 17,fontWeight: 'bold',marginHorizontal:5}]}>{'Remember Me'}</Text>
                        </View> */}

                     {/* Login Button */}
                       <View style={{marginTop:50,height:30,width:'100%',}}>
                        <View style={styles.ButtonWithoutborderStyle}>                       
                         <TouchableOpacity style={[{backgroundColor: Colors.submit_button,alignSelf:'center',},styles.buttonStyle]}
                         onPress={() => this.props.onLoginClick(this.state.email, this.state.password)}>
                         <Text allowFontScaling={false} style={[styles.loginStyle,{color: Colors.white,fontSize: 17}]}>{'Login'}</Text>
                         </TouchableOpacity>
                         </View>
                         </View>

                        {/* Cant signin button */}

                         <View style={{marginTop:50,height:30,width:'30%'}}>
                        <View style={styles.ButtonWithoutborderStyle}>
                        <TouchableOpacity
                         onPress={() => this.props.CantSignIn(this.state.email)}>
                         <Text allowFontScaling={false} style={[styles.textStyle,{fontSize: 17,fontWeight: 'bold', color:Colors.submit_button}]}>{'Cant Sign In?  Submit a Help Ticket'}</Text>
                         </TouchableOpacity>
                        </View>
                        </View>
                </View>
                </View>

      );
      
    }
    onLogout() {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout',
            [
                {text: 'Cancel' },
                {text: 'OK', 
                // onPress: () => oauth.logout()
            },
            ],
            { cancelable: true }
        )
    }

   
}

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'white',
        paddingRight:10,
        paddingBottom:10,
        paddingLeft:10
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


    appName: {
        fontSize: 28,
        color: "orange",
        fontWeight: 'bold',
        fontFamily: 'system font'
    },
    textStyle: {
        fontSize: 14,
        color: "black",
        fontWeight: 'normal',
        fontFamily:  'system font'
    },
    outerComponentStyle: {
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: "transparent"

    },

    logoStyle: {

        width:'100%',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop:102,
        // marginBottom:30,

    },


    loginStyle: {
        color: "black",
        fontSize: 17,
        fontWeight: 'normal',
        fontFamily: 'system font'
    },


    buttonStyle: {
        height: 49,
        marginTop: 15,
        // marginBottom:10,
        borderRadius:4,
        borderWidth:1,
        justifyContent: 'center',
         borderColor: "transparent",
        alignItems: 'center',
        width: '30%'

       
    },

    textInput: {
        flex: 1, fontSize: 16, color: "black",fontFamily:  'system font'
    },
    ButtonWithoutborderStyle: {
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        height: 60,
        // backgroundColor: "transparent",
        // backgroundColor:'red',
        width: '100%'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderWidth:0.5,
        borderColor: "gray",
        backgroundColor: "white",
        borderRadius: 3,
        // marginBottom: 10,
        marginTop:9,
        width: '30%',
        padding:5
    },

    ImageStyleEmail: {
        height:24,
        width:24,
        padding: 10,
        margin: 5,
        marginLeft:12,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    ImageStyleEmailCopy: {
        height:24,
        width:24,
        padding: 10,
        margin: 5,
        marginRight:12,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    dateText: {
        color: "gray",
        fontSize: 12,
        fontWeight: '400'
    },
    containerTextInput: {
        height: 50, borderRadius: 3, marginTop: -6,
        justifyContent: 'center',
        borderWidth: 1, borderColor: '#979797',
    },
    input_text: {
        paddingLeft: 20, color: 'black'
    },
    submitButtonStyle:{
       // marginTop: 20,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', height: 48,
        backgroundColor: "orange" },
    button_container: { flex: 1 },
    button_container_fields: { backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center'}
});