/**
 * Read About Action bar here:
 *      https://github.com/Osedea/react-native-action-bar
 **/
import React,{useState} from "react";
import { Platform, Alert, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Linking,ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { store } from '../redux/store/index';

// import ActionBar from "react-native-action-bar";
 import NetInfo from "@react-native-community/netinfo";
 
 import * as Actions from '../redux/actions'

// import Moment from 'moment';
import ActionBar from "../granulars/ActionBar";
import { _ActionBarStyle } from "../value/Styles";
import { Constants, SalesIqStore, Utility } from "../util";
import NoDataFound from '../component/NoDataFound';
import * as ImageAssest from "../value/ImageAssest";
import * as String from "../value/Strings";

import * as  Colors  from '../value/Colors';
import Toast from 'react-native-simple-toast'
import {LoginContainer} from '../Screen/index'
export function getActionBar(values,
    iconMap,
    styleAttributes,
    actions, styleType, associateFlag, filterCount) {

    var def_style_attr = {
        containerStyle: (associateFlag.associateClientFlag == 1) ? _ActionBarStyle.other_client_content : _ActionBarStyle.content,
        titleContainerStyle: (styleType.styleType == '2') ? _ActionBarStyle.titleContainer : _ActionBarStyle.titleContainer1,
        titleStyle: _ActionBarStyle.title,
        iconImageStyle: (styleType.styleType == '2') ? _ActionBarStyle.icond : _ActionBarStyle.iconBack,
        disableShadows: false,
    };

    let filterCounts = (filterCount.filterCount != null) ? filterCount.filterCount : 0;

    let def_values = {
        title: "Action Bar",
        subtitle: "Subtitle"
    };

    let style_attr = { ...def_style_attr, ...styleAttributes };
    let new_values = { ...def_values, ...values };

    let new_actions = {

        onLeftPress: function () {
            if (actions && typeof actions.onLeftPress === 'function')
                actions.onLeftPress();
            else log("CB not handled !");

        },
        onTitlePress: function () {
            if (actions && typeof actions.onTitlePress === 'function')
                actions.onTitlePress();
            else log("title not handled !");
        }
    };

    return (
        <ActionBar
            containerStyle={style_attr.containerStyle}
            backgroundColor={Colors.submit_button}
            title={new_values.title}
            filterCount= {filterCounts}
            titleContainerStyle={style_attr.titleContainerStyle}
            titleStyle={style_attr.titleStyle}
            leftIconImage={style_attr.leftIconImage}
            leftIconImageStyle={style_attr.leftIconImageStyle}
            iconContainerStyle={style_attr.iconContainerStyle}
            iconImageStyle={style_attr.iconImageStyle}
            disableShadows={style_attr.disableShadows}
            elevation={style_attr.elevation}
            onTitlePress={() => new_actions.onTitlePress()}
            rightIcons={iconMap}
            onLeftPress={() => new_actions.onLeftPress()}
            rightIconContainerStyle={_ActionBarStyle.rightIconContainerStyle}
        />
    );
}

export function log() {
    if (Constants.LOG_ENABLED)
        console.log(...arguments);
}


export function showLogoutDialog(props) {
    Utility.log("showLogoutDialog ===>> ",props.navigation)
    Alert.alert('', 'Are you sure you want to logout the App?',
        [
            { text: "No", color: Colors.hint_color },
            { text: "YES", color: Colors.orange_color, onPress: () => 
            {
                // clearDataLogout(props) 
                store.dispatch(Actions.setLoadingMsg("this is to test2"));
            }
        },
        ],
        { cancelable: false }
    );
}

export function clearDataLogout(props) {
    const store = new SalesIqStore()
    store.saveValueInPersistStore('username', "")
    store.saveValueInPersistStore('access_token', null)
    store.saveValueInPersistStore('userToken',null)
    Constants.user_Name = ""
    Constants.access_token = null
    props.navigation.closeDrawer()

}

export function showDialog(callback, title, message) {
    Alert.alert(title, message,
        [
            { text: "No", color: Colors.hint_color },
            {
                text: "YES",
                color: Colors.orange_color,
                onPress: () => callback.yesButtonClick()
            },
        ],
        { cancelable: false }
    );
}
export function MyAlert(title, msg, okHandler) {
    return (
        Alert.alert(
            title,
            '' + msg + '',
            [
                { text: 'Ok', onPress: okHandler ? okHandler : null }
            ], { cancelable: false }
        )
    )
}



export function clearAllSessionData(props) {

    // let keys = ['user_id', 'user_email', 'username', 'parent_id', 'access_token', 'name', 'profilePic', 'tnc', 'gst_registered', 'buyingLimit', 'client_id', 'clientLogo', 'associate_client', 'associatedFlag', 'navigationBarLogo', 'dashboardLogo', 'notificationLogo']
    // AsyncStorage.multiRemove(keys)
    // var store = new AuctionStore();
    // store.multiGetAsyncValueInPersistStore([Constants.SHOW_OFFER_FLAG]).then((values) => {
    //     props.navigation.dispatch(StackActions.reset({
    //         index: 0,
    //         actions: [
    //             NavigationActions.navigate({ routeName: 'login', params: { isShowOffer: values[0][1].toString() } })
    //         ]
    //     }))
    // })
}


export function clearAccessTokenAllSessionData(props) {

    // let keys = ['user_id', 'user_email', 'username', 'parent_id', 'access_token', 'name', 'profilePic', 'tnc', 'gst_registered', 'buyingLimit', 'client_id', 'clientLogo', 'associate_client', 'associatedFlag', 'navigationBarLogo', 'dashboardLogo', 'notificationLogo']
    // AsyncStorage.multiRemove(keys)
    // var store = new AuctionStore();
    // store.multiGetAsyncValueInPersistStore([Constants.SHOW_OFFER_FLAG]).then((values) => {
    //     // props.navigation.navigate({routeName: 'splash', params: { isShowOffer: values[0][1].toString()})
    //     // props.navigation.dispatch(StackActions.reset({
    //     //     index: 0,
    //     //     actions: [
    //     //         NavigationActions.navigate({ routeName: 'splash', params: { isShowOffer: values[0][1].toString() } })
    //     //     ]
    //     // }))
    // })
}



export function clearAsyncStorageRecords() {
    // let keys = ['user_id', 'user_email', 'username', 'parent_id', 'access_token', 'name', 'profilePic', 'tnc', 'gst_registered', 'buyingLimit', 'client_id', 'clientLogo', 'associate_client', 'associatedFlag', 'navigationBarLogo', 'dashboardLogo', 'notificationLogo']
    // AsyncStorage.multiRemove(keys);
    // return true
}



export function removeSpecialChar(val) {

    try {

        if (val) {

            if (val === undefined)
                return 0;
            else if (val === 0)
                return 0;
            return ((val.toString()).replace(/[^\d\.\-]/g, ""))

        } else {

            return 0;
        }


    } catch (error) {

    }


}









export function numberToPrice(num, options = {}) {
    let val = '12345464'.toLocaleString('en', {
        style: 'currency',
        currency: 'INR'
    });
    return val;
}

export function noDataFound(data, msg, subMsg, icon) {

    if (data != undefined && data.length === 0)
        return <NoDataFound message={msg}
            subMessage={subMsg}
            icon={icon} />

    if (data && data.length === 0)
        return <NoDataFound message={msg}
            subMessage={subMsg}
            icon={icon} />

    return null
}



export function compareString(value, compareValue) {


    if (value != null) {

        Utility.log("---------> :::::::::::", value, compareValue)
        let smallCase = value.toLowerCase()
        let compareValueSmall = compareValue.toLowerCase()
        return smallCase.includes(compareValueSmall)
    }
    return false
}

export async function getNetInfo() {
     NetInfo.fetch().then(async state => {
        Utility.log("Connection type", state.type);
        Utility.log("Is connected?", state.isConnected);

        // store.dispatch(Actions.internetConnected(''))

         return state.isConnected;
    });
    // if (Platform.OS === "ios") {
    //     try {
    //         const res = await fetch("https://www.google.com");
    //         if (res.status === 200) {
    //             return true;
    //         }
    //     } catch (e) {
    //         return false;
    //     }
    //     return false;
    // } else {
    //     return NetInfo.isConnected.fetch().then(
    //         (isConnected) => {
    //             return isConnected;
    //         });
    // }

}

export function isEmptyObject(obj) {

    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}



export function returnTitle(stringTitle, indexVal) {
    if (hasWhiteSpace(stringTitle) > -1) {
        return stringTitle.split(' ')[indexVal];
    } else {
        return stringTitle;
    }
}



export function getOwnerShipText(ownership) {
    if (ownership == null || ownership.indexOf("null") >= 0 || ownership == "" || ownership.indexOf("N/A") >= 0) {
        return "N/A"
    }
    switch (ownership) {
        case "1":
            return "1ˢᵗ Owner"
            break;
        case "2":
            return "2ⁿᵈ Owner"
            break;
        case "3":
            return "3ʳᵈ Owner"
            break;
        case "4":
            return "4ᵗʰ Owner"
            break;
        case "4+":
            return "4+ Owner"
            break;
        default:
            return "N/A"

    }
}

export function returnNA() {
    return (<View><Text style={{ fontSize: 10, marginLeft: 8, color: Colors.card_text_font_color }}>N/A</Text></View>);
}

export function getFormatedDate(serverDate) {

    if (serverDate != null) {

        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        //var serverDate = "28-03-2016"
        var seperated = serverDate.split("-")

        if (seperated.length == 3) {

            var formatteded = seperated[2] + "-" + seperated[1] + "-" + seperated[0]

            var d = new Date(formatteded);

            if (d.toString() != "Invalid Date") {

                var formated = d.getDate().toString() + " " + months[d.getMonth()] + " " + d.getFullYear().toString().substr(-2)

                return formated
            }
        }
    }
    return null
}


export function getRupeeFotmate(nNum, withSymbol) {

    try {

        if (nNum) {
            nNum = removeSpecialChar(nNum.toString());
            if (nNum.indexOf('.') > -1) { 
                Utility.log("found decimal 1111")
                let priceArr = nNum.split('.')
                nNum = priceArr[0]
            }
            var lastThree = nNum.substring(nNum.length - 3);
            var otherNumbers = nNum.substring(0, nNum.length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            res = res.replace(String.rupee_symbol, '');
            if (withSymbol == 1 && res.length > 0) {
                return String.rupee_symbol + res;
            } else {
                return res;
            }

        } else {

            return String.rupee_symbol + '';
        }


    } catch (error) {

        Utility.log('getRupeeFotmate :::', 'Errror ----> ', error, nNum)
    }


}


export function showToast(message) {

    Toast.show(message, Toast.SHORT)
}

export function getBlankNaCHeck(str) {
    if (str == null || str == "" || str.indexOf("N/A") >= 0) {
        return "";
    }
    return str;
}

export function chkBlankNA(str) {
    if (str == null || str == "" || str.indexOf("N/A") >= 0) {
        return false;
    }
    return true;
}


export function addnumber()
{
    return x+y;
}




export function renderBottomSheet(ui, render, cb) {

    const styles = StyleSheet.create({
        bottomSheet: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            backgroundColor: Colors.black_54,
            position: 'absolute'


        },
        bottomSheetBackGround: {
            backgroundColor: Colors.white,
        }
    });
    if (render)
        return (

            <View style={styles.bottomSheet}>
                <View
                    style={{ flex: 1, justifyContent: "flex-end", marginHorizontal: 16, marginVertical: 16 }}
                    underlayColor={Colors.UNDERLAY_COLOR}>
                    <View underlayColor={"white"}
                        style={{ width: "100%", marginBottom: 80, elevation: 4, borderRadius: 8 }}>
                        <View style={styles.bottomSheetBackGround}>
                            <SafeAreaView style={{ width: "100%" }}>
                                {ui()}
                            </SafeAreaView >
                        </View>
                    </View>
                </View>
            </View>
        );
    else return <View />
}

/**
 *
 * @param highlighted
 * @param completeText
 * @returns {*}
 */
export function getHighlightedText(highlighted, completeText) {

    let indexOfQuery = completeText.toLowerCase().indexOf(highlighted.toLowerCase());
    let p1 = completeText.slice(0, indexOfQuery),
        p2 = completeText.slice(indexOfQuery, indexOfQuery + highlighted.length),
        p3 = completeText.slice(indexOfQuery + highlighted.length, completeText.length);
    return <Text>{p1}<Text style={{ fontWeight: 'bold', color: "#000" }}>{p2}</Text>{p3}
    </Text>
}

// to capitalize the first letter of a string
export function UcfirstLetter(string) {
    if (string && string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return 'N/A'
}   

export function u(val) {
    if (val == null || val == undefined || val == "") {
        return true;
    }
    return false;
}

export function ChkBlankValue(val) {
    if (val == null || val == undefined || val == "") {
        return true;
    }
    return false;
}
export function convertArrayTOCommaString(indexArray, compareArray) {
    let str = "";
    for (var i = 0; i < indexArray.length; i++) {
        if (i > 0) {
            if (compareArray[indexArray[i]] != 'undefined')
                str = str + "," + compareArray[indexArray[i]]
        } else {
            if (compareArray[indexArray[i]] != 'undefined')
                str = str + compareArray[indexArray[i]]
        }
    }
    return str;
}



export function isEmptyChk(strVal) {
    if (strVal == undefined || strVal == null || strVal == "") {
        return false;
    }
    return true;
}

export function isValidName(name) {
    //String regx = "^[\\p{L} .'-]+$";
    if (/^[a-zA-Z\\s]*$/.test(name)) {
        return true;
    } else {
        return false;
    }
}

export function isValidMobile(mob) {
    if (/^\d{10}$/.test(mob)) {
        return true;
    } else {
        return false;
    }
}

export function isValidMobileStart(mob) {
    var firstChar = mob.charAt(0);
    if (firstChar == '6' || firstChar == '7' || firstChar == '8' || firstChar == '9') {
        return true;
    } else {
        return false;
    }
}


export function getMessgaeFromResponse(response) {

    if (!!response.data) {
        if (typeof response.data == 'string') {

            var jsonResponse = JSON.parse(response.data)
            return jsonResponse.msg

        } else {

            var jsonResponse = response.data
            return jsonResponse.msg
        }

    }
    else {
        if (typeof response == 'string') {
            let jsonResponse = JSON.parse(response);
            return jsonResponse.msg
        } else {
            return response.msg
        }

    }
    return ""
}



export function makeCall(mobile) {
    var url = 'tel:' + mobile;
    Linking.canOpenURL(url).then(supported => {

        if (!supported) {

            alert("Call not support on your device")

        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.log('An error occurred', err));
}

export function getCircle(backColor) {
    return (
        <View style={this.circleStyle(backColor)} >
        </View>
    );
}

export function circleStyle(backgroundColor) {
    return { borderRadius: 16, width: 12, height: 12, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }
}

export function getOctal(backColor, rating) {
    return (
        <View style={this.octalStyle(backColor)} >
            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 10, color: Colors.white }}> {rating} </Text>
        </View>
    );
}

export function octalStyle(backgroundColor) {
    return { borderRadius: 16, width: 24, height: 16, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }
}

export function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true
    }
    return false
}

export function showFlagChk(flag) {
    if (flag === undefined || flag === null || flag === "" || flag === "0") {
        return false;
    } else {
        return true;
    }
}

export function sendSortGA(sortval, screenname, screenType) {
}

export function getRegNum(regNum) {
    if (regNum == null || regNum == "" || regNum.indexOf("N/A") >= 0) {
        return "N/A"
    } else {
        // let reg = regNum.replace(/\s/g, '').substring(0, 4);
        return regNum;
    }
}
export function checkSpecialChar(str) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (format.test(str)) {
        return true;
    } else {
        return false;
    }
}
export function ProgressLoader() {
    return(
        <View style={{width:'100%',height:'100%',alignItem:'center',justifyContent:'center'}}>
            <ActivityIndicator
                animating={true} color={Colors.orange_color}
            />
        </View>
    )
}


export function checkValidDate(otpDate) {
    var endTime = Moment(otpDate).format('YYYY-MM-DD HH:mm:ss a')
    Utility.log("otpDate :", endTime);

    var today = new Date();
    var todayTime = Moment(today).format('YYYY-MM-DD HH:mm:ss a')
    Utility.log("checkValidDate time == ", todayTime, endTime)

    if (endTime > todayTime) {
        return true
    }

    return false
}

export function checkInvalidPhoneChar(amount) {
    if (amount.includes('.') || amount.includes('-') || amount.includes(',')) {
        return true;
    }
    else {
        return false;
    }
}


export function checkAlphaNumeric(val) {
    if (val.length > 0) {
        var valString = /^[0-9a-zA-Z]+$/;
        if ((val.match(valString))) {
            return false;
        } else {
            return true;
        }
    }
}



export function noSearchDataFound() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View style={{ alignItems: 'center' }}>
                <Image
                    resizeMode={'cover'}
                    alignSelf={'center'}
                    opacity={0.5}
                    style={{ height: 80, width: 100, tintColor: Colors.orange_color }}
                    source={ImageAssest.no_search_result} />
                <Text style={{
                    fontFamily: String.APP_FONT,
                    color: Colors.black_40,
                    fontSize: 20,
                    fontWeight: '600',
                    alignItems: 'center'
                }}>
                    No Result Found
                    </Text>
                <Text style={{
                    fontFamily: String.APP_FONT,
                    color: Colors.black_40,
                    marginTop: 10,
                    fontSize: 12,
                    fontWeight: '100',
                    alignItems: 'center'
                }}>
                    You can change search criteria and try again
                    </Text>

            </View>

        </View>
    )
}

export function isAlphanumeric(text) {
    if (/[^0-9a-zA-Z]/.test(text)) {
        return true
    }
    return false
}
