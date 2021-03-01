import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {Colors, Strings} from "../values";
import {Utility} from "../util";
import PropTypes from 'prop-types';
export default class NoInternetError extends Component {

    static defaultProps = {
        errorMessage: undefined
    };

    constructor() {
        super();
        if (this.props && !this.props.callback)
            Utility.log("WARN: ", "No callback received as prop for Retry function !!");

        this.update = this.update.bind(this);
    }

    UNSAFE_componentWillMount() {
    }

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.box}>
                    <Image
                        source={require('../assets/drawable/no_internet_icon.png')}
                        style={styles.medium_icon}
                    />
                    <Text style={{marginTop: 2, fontSize: 16}}>
                        {this.props.errorMessage ? this.props.errorMessage : Strings.no_internet}
                    </Text>
                    <TouchableNativeFeedback
                        onPress={this.update}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.retryButton}>
                            <Text style={styles.retryText}>
                                RETRY</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }

    update() {
        if (!this.props.callback && typeof this.props.onRefresh !== 'function')
            Utility.log("INFO: ", Strings.unhandled);
        else
            this.props.callback();
    }
}

NoInternetError.propTypes = {
    callback: PropTypes.func,
    errorMessage: PropTypes.string,
};

const styles = StyleSheet.create({
    content: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white},
    box: {flexDirection: 'column', alignItems: 'center'},
    medium_icon: {height: 50, width: 50},
    retryButton: {
        marginTop: 10,
        width: 130,
        height: 40,
        backgroundColor: Colors.color_primary,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 3
    },
    retryText: {margin: 10, fontSize: 17, color: Colors.white, fontWeight: "bold"}
});