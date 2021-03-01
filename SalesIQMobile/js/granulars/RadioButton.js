import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from "../values";



let self = undefined;

const Orientation = Object.freeze({
    VERTICAL: 0,
    HORIZONTAL: 1
});

/**
 *    AUTHOR :
 *    Shashank
 *
 *    PROPS:
 *       list:                           Data to populate;
 *       displayAttribute:               Attribute name to display alongside radio button. (Required when supplying
 *                                          object Array instead of String Array)
 *       orientation:                    list orientation Orientation.HORIZONTAL(def), Orientation.VERTICAL]),
 *       tintSelected:                   tint color of selected radio button (def: Colors.color_primaryDark),
 *       tintUnselected:                 tint color of unselected radio button (def: Colors.defaultUnselectedRadioTint),
 *       onItemChanged(newPos, oldPos,:  Callback; received when selection changes
 *                         isDefault)        (Also called when default value is set),
 *       customItemView(index,item):     Callback, for rendering custom views instead of text,
 *       defaultSelectedPosition:        Default position selected (def: -1),
 *       buttonSize:                     Radio button size (def: 16),
 *       itemStyle:                      Style attributes for individual radio-buttons,
 *       style:                          Style attributes for radio-group as whole,
 *
 *
 *    SAMPLE USE-CASE
 *
 *       let data = [ {'name': "A", 'roll': 1}, {'name': "B", 'roll': 2}, {'name': "C", 'roll': 3}, ]
 *       <RadioButton
 *            style={{marginTop: 6, justifyContent: "space-around"}}
 *            onItemChanged={(newPosition, oldPosition) => {Utility.log(newPosition, oldPosition);}}
 *            list={data}
 *            orientation={Orientation.HORIZONTAL}
 *            itemStyle={{marginVertical: 5}}
 *            customItemView={(index, item) => this.renderRadioItem(index, item)}
 *            defaultSelectedPosition={1},
 *            displayAttribute={"name"}     // value of this attribute will be rendered
 *        />
 *
 *        renderRadioItem = (index, item) => { return <Image
*                                               source={{uri: item}}
*                                               style={{width: 50, height: 50}}
*                                             />;}
 **/

class RadioButton extends Component {

    static defaultProps = {
        list: ["Yes", "No"],
        orientation: Orientation.HORIZONTAL,
        tintSelected: Colors.orange_color,
        defaultSelectedPosition: -1,
        onItemChanged: function (newPos, oldPos) {
            //Console.log("utility",newPos, oldPos);
        },
        buttonSize: 20,
        displayAttribute: "value",
        tintUnselected: Colors.card_header_bg,
        disabledIndices: [],
        highlightColor: "rgba(238,238,238,0.5)",
        extra: false
    };

    previousPosition = -1;
    tintDisabled = "#BDBDBD";

    getSelectedView = (item, index) => {
        return (
            <View style={[styles.itemBaseStyle,
                this.props.itemStyle || {}]}>
                <View style={[styles.circle,
                    {
                        width: this.props.buttonSize,
                        height: this.props.buttonSize,
                        borderColor: !item.disabled ? this.props.tintSelected : this.tintDisabled,
                        borderRadius: this.props.buttonSize / 2,
                    }]}>
                    <View style={[styles.fill, {
                        backgroundColor: !item.disabled ? this.props.tintSelected : this.tintDisabled,
                        borderRadius: this.props.buttonSize / 2,
                    }]}/>
                </View>
                {this.props.customItemView
                    ? this.props.customItemView(index, item)
                    : <Text style={{
                        color: !item.disabled ? Colors.black_85 : this.tintDisabled,
                        fontSize: 14
                    }}>{item[this.props.displayAttribute]}</Text>
                }
            </View>
        );
    };
    getUnselectedView = (item, index) => {
        return (
            <View style={[
                styles.itemBaseStyle,
                this.props.itemStyle || {}]}>
                <View style={[styles.circle,
                    {
                        width: this.props.buttonSize,
                        height: this.props.buttonSize,
                        borderColor: !item.disabled ? this.props.tintUnselected : this.tintDisabled,
                        borderRadius: this.props.buttonSize / 2,
                    }]}/>
                {this.props.customItemView
                    ? this.props.customItemView(index, item)
                    : <Text style={{
                        color: !item.disabled ? Colors.black_85 : this.tintDisabled,
                        fontSize: 14
                    }}>{item[this.props.displayAttribute]}</Text>
                }
            </View>
        );
    };

    markSelected = (index) => {
        this.setState({selectedIndex: index});
    };

    constructor(props) {
        super(props);
        self = this;
        //console.log("dis", props.disabledIndices);
        this.state = {
            selectedIndex: props.defaultSelectedPosition
        };
    }

    componentDidMount() {
        // code to update Parent Component about the default selection event
        if (this.props.defaultSelectedPosition !== -1
            && this.props.defaultSelectedPosition < this.workingData.length) {
            this.itemClicked(this.props.defaultSelectedPosition, true)
        }
    }

    render() {

        let receivedStringArray = false;
        if (this.props.list && this.props.list.length > 0)
            receivedStringArray = (typeof this.props.list[0]) === "string";
        this.workingData = [];
        let key = new Date().getTime();
        this.props.list.map((item, index) => {
            let disabled = this.props.disabledIndices.includes(index);
            if (receivedStringArray) {
                this.workingData.push({value: item, key: key++, disabled});
            } else {
                this.workingData.push({...item, key: key++, disabled});
            }
        });

        return (
            <View style={[styles.content,
                this.props.style,
                this.props.orientation === Orientation.HORIZONTAL ? {
                    flexDirection: "row", flexWrap: "wrap",
                } : {flexDirection: "column",}]}>
                {this.workingData.map((item, index) => {
                    return <View style={{alignSelf: "stretch"}} key={item.key}>
                        <TouchableHighlight
                            onPress={() => !item.disabled
                                && this.itemClicked(index)}
                            underlayColor={!item.disabled ? this.props.highlightColor : "transparent"}>
                            <View style={{}}>
                                {index === this.state.selectedIndex ?
                                    this.getSelectedView(item, index)
                                    :
                                    this.getUnselectedView(item, index)
                                }
                            </View>
                        </TouchableHighlight></View>
                })}
            </View>
        );
    }

    itemClicked(index, isDefault) {
        this.setState({selectedIndex: index});
        this.props.onItemChanged(index, this.previousPosition, isDefault);
        this.previousPosition = index;
    };

}

RadioButton.propTypes = {
    list: PropTypes.array,
    orientation: PropTypes.oneOf([Orientation.HORIZONTAL, Orientation.VERTICAL]),
    tintSelected: PropTypes.string,
    tintUnselected: PropTypes.string,
    onItemChanged: PropTypes.func,
    customItemView: PropTypes.func,
    defaultSelectedPosition: PropTypes.number,
    buttonSize: PropTypes.number,
    disabledIndices: PropTypes.arrayOf(PropTypes.number),
    itemStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
    highlightColor: PropTypes.string,
    extra: PropTypes.bool
};

const styles = StyleSheet.create({
    content: {justifyContent: 'space-around', alignItems: 'flex-start'},
    itemBaseStyle: {flexDirection: "row", alignItems: "center", paddingEnd: 8},
    circle: {borderWidth: 2, marginEnd: 8, padding: 3},
    fill: {flex: 1,}
});

export {RadioButton, Orientation};