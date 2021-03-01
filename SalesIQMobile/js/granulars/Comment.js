import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import Tags from './Tags';

class Comment extends Component {

    constructor(pros) {

        super(pros)
        this.state = {
            comment: ''
        }
    }

    static defaultProps = {
        title: "Comments",
        value: "",
        placeholder: "Place Holder",
        onTextChange: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TextInput
                    style={styles.text_input}
                    multiline={true}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={(text) => {
                        if (this.props.onChangeText != null)
                            this.props.onChangeText(text)
                    }}/>
            </View>
        )
    }
}

Tags.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onTextChange: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    title: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '400'
    },
    text_input: {

        fontSize: 16,
        flex: 1
    }
});

export default Comment