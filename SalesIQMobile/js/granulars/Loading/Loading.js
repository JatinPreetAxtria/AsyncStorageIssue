import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import * as Colors from "../../value/Colors";
import * as Styles from "../../value/Styles";

class Loading extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <View style={[Styles._ActivityStyle.value, { backgroundColor: this.props.bgColor ? this.props.bgColor : Colors.screen_background_color,zIndex:100 }]}>
                <ActivityIndicator size="large" color={Colors.orange_color} visible={this.props.isLoading} />
            </View>
        );
    }
}

export default Loading;
