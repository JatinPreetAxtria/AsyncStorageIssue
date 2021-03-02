import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import { ScreenStates } from '../util/Constants'
import Loading from '../granulars/Loading/Loading';
import ErrorMessage from '../granulars/Error/ErrorMessage';
import * as Colors from "../value/Colors";

export const WithLoading = (Component) => ({ children, ...props }) => {

    return (
        <Component style={Styles.container}>
            {getView(children, props)}
        </Component>
    )
}

const getView = (children, props) => {

    if (props.screenState == ScreenStates.NO_ERROR || props.screenState == ScreenStates.IS_REFRESHING) {

        if (props.searchHeader != null) {

            return [props.searchHeader, children]

        } else {

            return children
        }

    }
    if (props.screenState == ScreenStates.IS_LOADING) {

        return <Loading style={Styles.containerLoder} />
    }
    else if (props.screenState == ScreenStates.NO_DATA_FOUND || props.screenState == ScreenStates.NO_SEARCH_DATA_FOUND || props.screenState == ScreenStates.INTERNET_NOT_AVAILABLE || props.screenState == ScreenStates.SERVER_ERROR) {

        if (props.screenState == ScreenStates.NO_SEARCH_DATA_FOUND) {

            if (props.searchHeader != null) {
                return [props.searchHeader, <ErrorMessage screenName={props.screenName} ScreenStatesError={props.screenState} />]
            }
            else {
                return <ErrorMessage screenName={props.screenName} ScreenStatesError={props.screenState} onRetry={props.onRetry} onBack={props.onBack} />
            }
        }
        return <ErrorMessage screenName={props.screenName} ScreenStatesError={props.screenState} onRetry={props.onRetry} onBack={props.onBack} />
    }
    else {
        return null
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerLoder: {
        backgroundColor: Colors.screen_background_color,
        position: 'absolute',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0
    }
});