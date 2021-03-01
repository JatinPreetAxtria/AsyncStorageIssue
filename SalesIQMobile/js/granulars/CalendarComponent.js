import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import * as Colors from "../value/Colors";

class CalendarComponent extends Component {

    static defaultProps = {
        selected: false,
        barColor: Colors.DEFAULT_DATE_BAR_COLOR,
        dayTextColor: Colors.BLACK_OPACITY_54,
        dateTextColor: Colors.BLACK_OPACITY_80
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.state.selected = nextProps.selected;
        return true;
    }

    render() {
        return (
            <TouchableHighlight underlayColor={Colors.LIGHT_GRAY}
                                style={styles.containerStyle} onPress={this.toggleSelected.bind(this)}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View style={styles.innerContainer}>
                        <Text style={[styles.dayStyle, {color: this.props.dayTextColor}]}>{this.props.dayText}</Text>
                        <Text style={[styles.dateStyle, {color: this.props.dateTextColor}]}>{this.props.dateText}</Text>
                    </View>
                    {this.getSelector()}
                </View>
            </TouchableHighlight>
        );
    }

    toggleSelected() {
        if (!this.state.selected) {
            this.props.action(this.props.position);
            this.setState({
                selected: !this.state.selected
            });
        }
    }

    getSelector() {
        var barColor = Colors.TRANSPARENT;
        if (this.state.selected) {
            barColor = this.props.barColor;
        }
        return (<View style={[styles.barStyle, {backgroundColor: barColor}]}/>);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },

    innerContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },

    barStyle: {
        height: 2,
        marginLeft: 10,
        marginRight: 10
    },

    dayStyle: {
        fontSize: 10,
        fontFamily: 'Roboto-Regular'
    },

    dateStyle: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular'
    }
});

export {CalendarComponent};
