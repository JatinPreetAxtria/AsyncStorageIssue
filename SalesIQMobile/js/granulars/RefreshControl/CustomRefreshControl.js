import React, { Component } from "react";
import { RefreshControl, View } from "react-native";
import { ScreenStates } from '../../util/Constants'
import { Colors } from "../../values/index";


const CustomRefreshControl= ({...props}) => {

    return (<RefreshControl
        refreshing={(props.screenState === ScreenStates.IS_REFRESHING) ? true : false}
        onRefresh={() => {
            if (props.handleOnRefresh != undefined) {

                props.handleOnRefresh()
            }
        }}
        title={props.title}
        colors = {[Colors.REFRESH_CONTROL_COLOR]}
        tintColor={Colors.REFRESH_CONTROL_COLOR}
        titleColor={Colors.REFRESH_CONTROL_COLOR}
    />)
}

export default CustomRefreshControl