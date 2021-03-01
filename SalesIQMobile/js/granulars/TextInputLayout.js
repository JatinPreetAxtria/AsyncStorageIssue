import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
    StyleSheet,
    View,
    Animated,
    Platform,
    TouchableHighlight,
    Image,
    Text
} from 'react-native';
import {Colors} from '../values'

export default class TextInputLayout extends Component {

    static propTypes = {
        ...View.propTypes,
        hintColor: PropTypes.string,
        errorColor: PropTypes.string,
        focusColor: PropTypes.string,
        labelFontSize: PropTypes.number,
        labelText: PropTypes.string,
        checkValid: PropTypes.func
    };
    static defaultProps = {
        hintColor: Colors.hint_color,
        errorColor: Colors.orange_color,
        focusColor: Colors.hint_color,
        labelFontSize: 12,
        labelText: undefined,
        checkValid: undefined,
        visible: true,
        allowEmpty: false
    };

    state = {
        showLabel: false,
        labelAnimationValue: new Animated.Value(0),
        isFocused: false,
        isError: false
    };

    constructor(props) {
        super(props);
        this.state.visible = this.props.visible;
        this._onBlur = this._onBlur.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onChangeText = this._onChangeText.bind(this);

        this._handleChildren(props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this._handleChildren(nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.showLabel !== this.state.showLabel) {
            this._springValue(
                this.state.labelAnimationValue,
                nextState.showLabel
                    ? 1
                    : 0
            )
        }
    }

    _springValue(animatedValue, toValue) {
        Animated.spring(animatedValue, {
            toValue: toValue,
            friction: 10
        }).start();
    }

    /**
     * font, size, color, gravity, hintColor
     * @param props
     * @private
     */
    _handleChildren(props) {
        let edtChild = React.Children.only(props.children);
        this._oriEdtChild = edtChild;
        this._oriEdtStyle = StyleSheet.flatten([edtChild.props.style])
        this._oriOnFocus = edtChild.props.onFocus;
        this._oriOnBlur = edtChild.props.onBlur;
        this._oriOnChangeText = edtChild.props.onChangeText;

        const textValue = edtChild.props.value || edtChild.props.defaultValue;
        if (textValue) {
            this._edtText = textValue;
            this.state.showLabel = true;
            this.state.labelAnimationValue = new Animated.Value(1);
        }
        this._edtChild = React.cloneElement(edtChild, {
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onChangeText: this._onChangeText,
            style: [
                edtChild.props.style, {
                    backgroundColor: 'transparent',
                    textAlignVertical: 'center',
                    textAlign: 'left',
                    padding: 0,
                    //fontFamily: 'Roboto-Regular'
                }
            ],
            placeholder: null,
           // underlineColorAndroid: 'transparent'
        });

        let {height, fontSize} = this._oriEdtStyle;
        let labelHeight = fontSize + 3;

        let labelTransY = this.state.labelAnimationValue.interpolate({
            inputRange: [
                0, 1
            ],
            outputRange: [
                height + labelHeight >> 1,
                labelHeight - this.props.labelFontSize
            ]
        });

        let labelFontSize = this.state.labelAnimationValue.interpolate({
            inputRange: [
                0, 1
            ],
            outputRange: [fontSize, this.props.labelFontSize]
        });

        this._labelStyle = {
            fontSize: labelFontSize,
            height: labelHeight,
            backgroundColor: 'transparent',
            //fontFamily: 'Roboto-Regular',
            transform: [
                {
                    translateY: labelTransY
                }
            ]
        };
    }

    _onFocus() {
        if (!this._edtText)
            this.setState({showLabel: true, isFocused: true});
        else
            this.setState({isFocused: true});
        this._oriOnFocus && this._oriOnFocus();
    }

    _onBlur() {
        let isError = false,
            errorMsg;
        if (this.props.checkValid) {
            errorMsg = this.props.checkValid(
                this._edtText,
                this.props.allowEmpty,
                this.props.displayName
            );
            isError = errorMsg && errorMsg.length > 0;
        }
        if (!this._edtText)
            this.setState({showLabel: false, isFocused: false, isError, errorMsg});
        else
            this.setState({isFocused: false, isError, errorMsg});
        this._oriOnBlur && this._oriOnBlur();
    }

    _onChangeText(text) {
        this._edtText = text;
        if (this.props.checkValid) {
            let errorMsg = this.props.checkValid(
                this._edtText,
                this.props.allowEmpty,
                this.props.displayName
            );
            let isError = errorMsg && errorMsg.length > 0;
            if (!isError) {
                this.setState({isError, errorMsg});
            }
        }
        this._oriOnChangeText && this._oriOnChangeText(text);
    }

    getTextValue() {
        return this._edtText;
    }

    setTextValue(text) {
        this._edtText = text;
    }

    setVisibility(visible) {
        this.setState({visible});
    }

    isVisible() {
        return this.state.visible;
    }

    setError(errorMsg) {
        var isError = errorMsg && errorMsg.length > 0;
        this.setState({isError, errorMsg});
    }

    render() {
        let {isFocused, isError} = this.state;
        let {errorColor, hintColor, focusColor, showRightDrawable, rightDrawable} = this.props;
        let color = isError
            ? errorColor
            : (
                isFocused
                    ? focusColor
                    : hintColor
            );
        let borderBottomWidth = 0,
            height = 0,
            marginVertical = 0;
        if (this.state.visible) {
            borderBottomWidth = isFocused
                ? 2
                : 1;
            height = null;
            marginVertical = 8;
        }
        return (
            <View
                style={{
                    marginHorizontal: this.props.marginHorizontal
                }}>
                <View
                    style={[
                        {
                            height,
                            borderBottomWidth,
                            borderBottomColor: color,
                            flexDirection: 'row',
                            marginVertical: this.props.marginVertical,
                            alignItems: 'center'
                        },
                        this.props.style
                    ]}>

                    <View style={{
                        flex: 1
                    }}>
                        <Animated.Text
                            style={[
                                this._labelStyle, {
                                    color: color
                                }
                            ]}>
                            {this.props.labelText || this._oriEdtChild.props.placeholder}
                        </Animated.Text>
                        {this._edtChild}
                    </View>

                    {
                        showRightDrawable
                            ? <TouchableHighlight
                                underlayColor={Colors.hint_color}
                                onPress={this.props.onRightClick}>
                                <Image source={rightDrawable}/>
                            </TouchableHighlight>
                            : null
                    }
                </View>

                {this.getErrorView()}
            </View>
        );
    }

    getErrorView() {
        if (this.state.isError && this.state.errorMsg) {
            return (
                <Text
                    style={{
                        //fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                        color: this.props.errorColor,
                        marginTop: 5
                    }}>
                    {this.state.errorMsg}
                </Text>
            );
        }
    }
}