
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Image, TouchableHighlight, View} from 'react-native';
import {Colors,ImageAssests} from './../value';

let checkedIcon = ImageAssests.right_icon;;
export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.toggleCheck = this.toggleCheck.bind(this);
        this.state = {
            checked: props.checked || false,
            onChange: props.onChange,
            style: props.style || {},
            size: props.size || 18,
            checkedIcon: props.checkedIcon || checkedIcon,
            //unCheckedIcon: props.unCheckedIcon || unCheckedIcon,
            checkable: props.checkable || true
        };
        //console.log(this.state);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.nextProps != nextProps;
    }

    render() {
        return (
            <TouchableHighlight underlayColor='transparent'
                                onPress={() => {
                                    this.toggleCheck()
                                }}
                                style={[{
                                    height: this.state.size,
                                    width: this.state.size,
                                    borderWidth:1,
                                    borderColor: this.props.borderColor == Colors.black? Colors.orange_color : Colors.white_70,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }, this.state.style]}>
               { this.props.checked ? <Image style={{height:18,width:18}} source={ this.state.checkedIcon }/> : <View></View> }

            </TouchableHighlight>
        );
    }

    toggleCheck() {
        let checked = !this.state.checked;
        this.setState({checked: checked});
        this.props.onChange(checked);
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.object,
    checkedIcon: PropTypes.string,
    unCheckedIcon: PropTypes.string
};