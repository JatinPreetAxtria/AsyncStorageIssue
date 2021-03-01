import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import * as Colors from '../../values/Colors';
import * as ImageAssest from "../../value/ImageAssest";
import { ScreenStates, ScreenName } from "../../util/Constants"
import { Styles } from '../../values';
import * as Strings from "../../values/Strings";

class ErrorMessage extends Component {

    constructor(props) {

        super(props)

    }

    render() {


        let { image, title, message } = this.getErrorTypeMessage(this.props.ScreenStatesError)
        //console.log("render ------------------------------------------------->", this.props.ScreenStatesError)

        return (

            <View style={styleContent.viewStyle}>

                <View style={{ alignItems: 'center' }}>
                    <Image
                        resizeMode={'cover'}
                        alignSelf={'center'}
                        opacity={0.5}
                        style={{ height: 80, width: 100, tintColor: Colors.orange_color }}
                        source={image} />
                    <Text style={styleContent.textStyle}>
                        {title}
                    </Text>
                    <Text style={styleContent.subTextStyle}>
                        {message}
                    </Text>
                    {this.props.onRetry && <TouchableOpacity style={[styleContent.button]} onPress={this.props.onRetry}>
                        <Text style={styleContent.button_text}>
                            {(this.props.typeState == '') ? "Retry" : "Remove Filters"}
                        </Text>
                    </TouchableOpacity>}
                    {(this.props.screenName == ScreenName.SCREEN_VDP && Platform.OS == 'ios') ? <TouchableOpacity style={[styleContent.button]} onPress={this.props.onBack}>
                        <Text style={styleContent.button_text}>
                            Back
                        </Text>
                    </TouchableOpacity> : null}

                </View>

            </View>
        )
    }

    getErrorTypeImage = (error) => {

        switch (error) {

            case ScreenStates.NO_SEARCH_DATA_FOUND:
                return ImageAssest.no_search_result
                break;

            case ScreenStates.INTERNET_NOT_AVAILABLE:
                return ImageAssest.internet_error
                break;
            case ScreenStates.NO_DATA_FOUND:
                return ImageAssest.internet_error
                break;

            case ScreenStates.NO_DATA_FOUND:
                return ImageAssest.internet_error
                break;

            default:
                return ImageAssest.no_search_result
                break;
        }
    }

    getErrorTypeMessage = (error) => {

        switch (error) {

            case ScreenStates.NO_SEARCH_DATA_FOUND:
                return this.noSearchDataForScreen(this.props.screenName)
                break;

            case ScreenStates.INTERNET_NOT_AVAILABLE:
                return this.noInternetConnectionForScreen(this.props.screenName)
                break;

            case ScreenStates.NO_DATA_FOUND:
                return this.noDataForScreen(this.props.screenName,this.props.typeState)
                break;

            case ScreenStates.SERVER_ERROR:
                return this.serverErrorForScreen(this.props.screenName)
                break;

            default:
                return { image: ImageAssest.no_activity, title: "No Result Found", message: "You can change search criteria and try again" }
                break;
        }

    }

    noDataForScreen(screenName , type) {

        switch (screenName) {

            case ScreenName.SCREEN_YOUR_BIDS:
                return { image: ImageAssest.no_bid, title: "No Vehicles to Show", message: "Start bidding on vehicles to see them here" }
                break;

            case ScreenName.SCREEN_WATCH_LIST:
                return { image: ImageAssest.no_watchlist, title: "No Vehicle to Show", message: "Please check your connection and try agan" }
                break;
 
            case ScreenName.SCREEN_LIVE_AUCTION:
                if(type != 'FilterReset'){
                    return { image: ImageAssest.no_bid, title: "No Live Auctions", message: "Keep checking this page frequently" }
                }
                else{
                    return { image: ImageAssest.no_bid, title: "No Live Auctions", message: "Keep checking this page frequently" }    
                }
                break;
            
            case ScreenName.SCREEN_OFFLINE_AUCTION:
            return { image: ImageAssest.no_bid, title: "No Offline Auctions", message: "Keep checking this page frequently" }
            break;
            case ScreenName.SCREEN_UPCOMING_AUCTION:
                return { image: ImageAssest.no_bid, title: "No Upcoming Auctions", message: "Keep checking this page frequently" }
                break;

            case ScreenName.SCREEN_YOUR_WINS:
                return { image: ImageAssest.no_watchlist, title: "No Vehicle to Show", message: "You haven't won any vehicles recently" }
                break;
            case ScreenName.SCREEN_ONE_CLICK_BUY:
                return { image: ImageAssest.no_watchlist, title: "No Vehicle to Show", message: "Stay tuned. We'll be back with more options!" }
                break;
            case ScreenName.SCREEN_ACTIVITY:
                return { image: ImageAssest.no_activity, title: "No Vehicle to Show", message: "You haven't bid for sometime. Start now!" }
                break;

            case ScreenName.SCREEN_HISTORY_PURCHASE:
                return { image: ImageAssest.no_activity, title: "No Vehicle to Show", message: Strings.PURCHASE_NO_VEHICLE_MSG}
                break;
            case ScreenName.SCREEN_HISTORY_WIN:
                return { image: ImageAssest.no_activity, title: "No Vehicle to Show", message: Strings.WIN_NO_VEHICLE_MSG}
                break;
            case ScreenName.SCREEN_HISTORY_BID:
                return { image: ImageAssest.no_activity, title: "No Vehicle to Show", message: Strings.BID_NO_VEHICLE_MSG}
                break;
            case ScreenName.SCREEN_WALLET:
                return { image: ImageAssest.no_bid, title: "No Transactions Found", message: Strings.WALLET_NO_VEHICLE_MESSAGE }
                break;
            case ScreenName.SCREEN_CHECKLIST:
                return { image: ImageAssest.no_bid, title: "No Data Found", message: "" }
                break;
            case ScreenName.SCREEN_MANAGE_NOTIFICATIONS:
                return { image: ImageAssest.no_activity, title: "No Data Found", message: "" }
                break;
            default:
                return { image: ImageAssest.no_activity, title: "No Result Found", message: "you can change search criteria and try again" }
                break;
        }
    }

    noSearchDataForScreen(screenName) {

        switch (screenName) {
            case ScreenName.SCREEN_WATCH_LIST:
                return { image: ImageAssest.no_search_result, title: "No Result Found", message: "You can change search criteria and try again" }
                break;

            default:
                return { image: ImageAssest.no_search_result, title: "No Result Found", message: "You can change search criteria and try again" }
                break;
        }
    }

    noInternetConnectionForScreen(screenName) {

        switch (screenName) {
            case ScreenName.SCREEN_WATCH_LIST:
                return { image: ImageAssest.internet_error, title: "No Internet Connection", message: "Please check your connection and try agan" }
                break;

            default:
                return { image: ImageAssest.internet_error, title: "No Internet Connection", message: "Please check your connection and try agan" }
                break;
        }
    }

    serverErrorForScreen(screenName) {

        switch (screenName) {
            case ScreenName.SCREEN_WATCH_LIST:
                return { image: ImageAssest.server_error, title: "Server Error", message: "Sorry! server failed to respond. Please try again" }
                break;

            default:
                return { image: ImageAssest.server_error, title: "Server Error", message: "Sorry! server failed to respond. Please try again" }
                break;
        }
    }

}

const styleContent = StyleSheet.create({

    viewStyle: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: Strings.APP_FONT,
        color: Colors.black_40,
        fontSize: 20,
        fontWeight: '600',
        alignItems: 'center'
    },
    subTextStyle: {
        fontFamily: Strings.APP_FONT,
        color: Colors.black_40,
        marginTop: 10,
        fontSize: 12,
        fontWeight: '100',
        alignItems: 'center'
    },
    button: {

        backgroundColor: Colors.orange_color,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
        borderRadius: 5

    },

    button_text: {
        fontFamily: Strings.APP_FONT,
        color: Colors.white,
        fontSize: 16,
    }

})
export default ErrorMessage;
