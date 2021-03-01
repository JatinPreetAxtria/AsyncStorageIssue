import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableHighlight, View, ViewPropTypes} from "react-native";
import * as Color from "../values/Colors";
import PropTypes from 'prop-types';

/**
 * AUTHOR:
 * Neha Mishra
 *
 * DESCRIPTION:
 *
 */

const Orientation = Object.freeze({
    VERTICAL: 0,
    HORIZONTAL: 1
});

class CheckBoxGroup extends Component {

    getSelectedView = () => {
        return (
            <View style={[styles.checkboxChecked, {
                borderColor: this.props.tint,
                backgroundColor: this.props.tint
            }]}>
                <Image
                    source={this.checkMark}
                    style={styles.checkIcon}
                />
            </View>
        );
    };

    getUnSelectedView = () => {
        return (
            <View style={styles.checkboxUnChecked}/>
        );
    };

    itemClicked = (index) => {
        this.workingData[index]._selection = !this.workingData[index]._selection;
        this.setState({re_render: !this.state.re_render});
        let response = [];
        response = this.workingData.reduce(function (response, item, index) {
            if (item._selection)
                response.push(index);
            return response;
        }, []);

        // Utility.log(JSON.stringify(response));

        // Send set of all selected indices, and last updated index in case it was
        // checked or else -1 if it was marked unchecked
        this.props.onSelectionChange && this.props.onSelectionChange(response,
            this.workingData[index]._selection ? index : -1);
    };

    /**
     *
     * @param indices : index[] to toggle
     * @returns {*|Array} of Currently selected positions
     */
    toggle = (indices = []) => {
        let response = [];

        if (indices)
            for (let index of indices)
                this.workingData[index]._selection = !this.workingData[index]._selection;

        if (indices && indices.length > 0) {
            this.setState({re_render: !this.state.re_render});
        }
        response = this.workingData.reduce(function (collection, item, index) {
            if (item._selection)
                collection.push(index);
            return collection;
        }, []);
        return response;
    };

    defaultProps: {
        tint: Color.color_primary,
        displayAttribute: "value",
        selectedIndices: []
    };

    constructor(props) {
        super(props);
        this.data = this.props.data;
        let receivedStringArray = false;
        if (this.data && this.data.length > 0)
            receivedStringArray = (typeof this.data[0]) === "string";
        this.workingData = [];
        let key = new Date().getTime();
        this.data.map((item, index) => {

            let s_val = false;

            // Use 'defaultSelectedPosition' position only if 'selectedIndices' is not supplied
            if (this.props.selectedIndices && this.props.selectedIndices.indexOf(index) !== -1)
                s_val = true;
            else if ((!this.props.selectedIndices || this.props.selectedIndices.length === 0)
                && this.props.defaultSelectedPosition && this.props.defaultSelectedPosition === index)
                s_val = true;

            if (receivedStringArray) {
                this.workingData.push({value: item, _selection: s_val, key: key++});
            } else {
                this.workingData.push({...item, _selection: s_val, key: key++});
            }
        });

        this.checkMark = require("../assets/drawable/check_white.png");
        // Utility.log(JSON.stringify(this.workingData));
        this.state = {
            re_render: false
        }
    }

    render() {
        if (this.props.unSelectAll) {
            this.workingData.map((item) => {
                item._selection = false;
            });
        }

        return (
            <View style={[styles.mainContainer,
                this.props.style,
                this.props.orientation === Orientation.HORIZONTAL ? {flexDirection: "row"}
                    : {flexDirection: "column"}]}>
                {this.workingData.map((item, index) => {
                    return (
                        <View style={[this.props.itemStyle, {alignSelf: "stretch"}]} key={item.key}>
                            <TouchableHighlight onPress={() => this.itemClicked(index)}
                                                underlayColor={"#eee"}>
                                <View style={[styles.singleItem,]}>
                                    <View style={styles.box}>
                                        {item._selection ? this.getSelectedView() : this.getUnSelectedView()}
                                    </View>
                                    <Text style={styles.label}>{item[this.props.displayAttribute]}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    );
                })}
            </View>
        );
    }

}

export {Orientation, CheckBoxGroup};

CheckBoxGroup.propTypes = {
    data: PropTypes.array,
    selectedIndices: PropTypes.arrayOf(PropTypes.number),
    orientation: PropTypes.oneOf([Orientation.HORIZONTAL, Orientation.VERTICAL]),
    tint: PropTypes.string,
    onSelectionChange: PropTypes.func,
    defaultSelectedPosition: PropTypes.number,
    itemStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
    displayAttribute: PropTypes.string,
    unSelectAll: PropTypes.bool
};

const styles = StyleSheet.create({
    mainContainer: {justifyContent: 'space-around', alignItems: 'flex-start'},
    singleItem: {flexDirection: "row", padding: 6},
    label: {marginLeft: 6, color: Color.black_85, fontSize:12},
    checkboxUnChecked: {
        width: 20,
        height: 20,
        borderColor: "#757575",
        borderWidth: 2,
        backgroundColor: "transparent",
        borderRadius: 3
    },
    checkboxChecked: {
        width: 20,
        height: 20,
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3
    },
    checkIcon: {width: 15, height: 15}
});

