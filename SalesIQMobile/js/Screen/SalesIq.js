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
    Text,StyleSheet
} from 'react-native';
import { SearchBar, Icon} from 'react-native-elements';
import NavImgButton from '../NavImgButton';
// import ContactScreen from './ContactScreen';
// import ContactCell from './ContactCell';
import axios from 'axios';


// Global sequence number, incremented every time a query is run
var seq = 0;

class SalesIq extends React.Component {
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
        // let bodyvalue = new FormData()
        // bodyvalue.append('tenant','Tenant1QA')
        // bodyvalue.append('planID','SC_ID_32d01974-f403-11ea-9c31-0a3f54d14e0e')
        // bodyvalue.append('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMDBEMVUwMDAwMDEycTRQVUFRIiwiZXhwIjoxNjEwMDU2NTU1fQ.vhNp6EpObeifSHWyVlIpKddwVTsPAbGI7A4vl4gcVTI')

        // let dataToSend = {
        //     'tenant':'Tenant1QA',
        //     'planID': 'SC_ID_32d01974-f403-11ea-9c31-0a3f54d14e0e',
        //     'token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMDBEMVUwMDAwMDEycTRQVUFRIiwiZXhwIjoxNjEwMzk0MTA1fQ.6Bm-cUkoN0A0fjRRlOnNXxeoopTyiZC1gPiV4d-L8oA'
        // }
        // var dataToSend = {title: 'foo', body: 'bar', userId: 1};


        // let tenant = 'Tenant1QA',
        // let planID = 'SC_ID_32d01974-f403-11ea-9c31-0a3f54d14e0e',
        // let  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMDBEMVUwMDAwMDEycTRQVUFRIiwiZXhwIjoxNjEwMzk0MTA1fQ.6Bm-cUkoN0A0fjRRlOnNXxeoopTyiZC1gPiV4d-L8oA'

        // let newBody = 'tenant=Tenant1QA&planID&SC_ID_32d01974-f403-11ea-9c31-0a3f54d14e0e&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMDBEMVUwMDAwMDEycTRQVUFRIiwiZXhwIjoxNjEwMzk0MTA1fQ.6Bm-cUkoN0A0fjRRlOnNXxeoopTyiZC1gPiV4d-L8oA'
        // let header = {
        //      "Accept": "application/json",
        //     // // "Content-Type": "multipart/form-data",
           
        //       "Content-Type": "application/json",

        //   }

        //   this.callApi('https://salesiq.axtria.com/QASalesCrediting/Plan/',header,body,'POST',false)
        

        // console.log('bodyvalue' + JSON.stringify(bodyvalue))
        // console.log('body' + JSON.stringify(body))
        // var formBody = [];
        // for (var key in dataToSend) {
        //   var encodedKey = encodeURIComponent(key);
        //   var encodedValue = encodeURIComponent(dataToSend[key]);
        //   formBody.push(encodedKey + '=' + encodedValue);
        // }
        // formBody = formBody.join('&');

        // console.log('formBody' + JSON.stringify(formBody))
      
        // const serviceResponse= fetch(
        //     'https://salesiq.axtria.com/QASalesCrediting/Plan/',
        //     {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 
        //         'application/x-www-form-urlencoded;charset=UTF-8',
               
        //     },
        //     body:formBody ,
        //     })
        //     .then((serviceResponse) => {
        //         console.log('serviceResponse' + JSON.stringify(serviceResponse) )
        //          return serviceResponse.json() } 
        //          )
        //     .catch((error) => console.warn("fetch error:", error))
        //     .then((serviceResponse) => {
        //     console.log('response is' + JSON.stringify(serviceResponse));
        //     });


// const serviceResponse2= fetch(
// 'https://jsonplaceholder.typicode.com/posts/1',
// {
// method: 'GET',
// // headers: {
// //  'Accept': 'application/json',
// //  'Content-Type': 'application/json'
// // },
// // body: JSON.stringify(body),
// })
// .then((serviceResponse2) => { return serviceResponse2.json() } )
// .catch((error) => console.warn("fetch error:", error))
// .then((serviceResponse2) => {
// console.log(JSON.stringify(serviceResponse2));
// });
//         const response = await     this.callApi('https://salesiq.axtria.com/QASalesCrediting/Plan/','',bodyvalue,'POST',true)
//         const response = await this.callApi()
// console.log("callapi" + JSON.stringify(response) )
        
        this.props.navigation.setOptions({
            title: 'SalesIQ',
            headerRight: () => (
                    <View style={styles.navButtonsGroup}>
                    
                    <NavImgButton icon='logout' iconType='material-community' onPress={() => this.onLogout()} />
                    </View>
            )
        });
       
    }

    
    
    refresh() {
        this.searchContacts(this.state.filter);
    }

    render() {
        return (
                <View style={{flex:1,padding:20,}}>
                 
                  <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                        onPress ={() =>{this.props.navigation.navigate('SalesIqPlan')} }
                        style={{backgroundColor:'white',marginBottom:20,paddingBottom:10}}
                        >
                        <Text style={styles.itemstyle}>{'Quater:' + item.quater}</Text>
                        <View style ={{flexDirection:'row-reverse'}}>
                        <View  style={{paddingLeft:30,paddingRight:30}}>   
                        <Icon size={32} name={'arrow-right-bold-circle'} type={'material-community'} color='black' underlayColor='black'   />
                        </View> 
                        <Icon size={32} name={'clock'} type={'material-community'} color='black' underlayColor='black' style={{Color:'black'}}  />

                        </View>
                       <View style ={{flexDirection:'row',}}>
                        <View style ={{flexDirection:'row',paddingRight:20}}>    
                       <Text style={styles.item}>{'status:'}</Text>
                       <Text style={styles.itemstyle}>{item.status}</Text>
                       </View> 
                       <View style ={{flexDirection:'row',}}>    
                       <Text style={styles.item}>{'Window End Date:'}</Text>
                       <Text style={styles.itemstyle}>{item.Date}</Text>
                       </View> 
                       </View> 

                      
       
                       </TouchableOpacity>
                      
                       )}
                       keyExtractor={(item, index) => 'key_' + index}
                    
                    />
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

export default SalesIq;
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
        
        
    }
});
