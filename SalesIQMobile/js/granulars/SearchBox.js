import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from "../values";
import {Utility} from "../util";
import PropTypes from 'prop-types';

let self = undefined;
export default class SearchBox extends Component {

    // REVIEW: Strings from Strings.js
    static defaultProps = {
        hint: "Enter text to search..."
    };

    constructor() {
        super();
        this.state = {};
        self = this;
        this.searchTextChanged = this.searchTextChanged.bind(this);
    }

    UNSAFE_componentWillMount() {
    }

    render() {
        return (
            <View style={styles.searchBox}>
                <Image
                    source={require("../assets/drawable/ic_search.png")}
                    style={styles._image}
                />
                <TextInput style={styles.searchText}
                           placeholder={this.props.hint}
                           onChangeText={(search) => this.searchTextChanged(search)}
                />
            </View>
        );
    }

    searchTextChanged(search) {
        if (!this.props.searchTextChanged)
            Utility.log("text: ", search);
        else this.props.searchTextChanged(search);
    }
}

SearchBox.propTypes = {
    hint: PropTypes.string,
    searchTextChanged: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    _image: {width: 25, height: 25, tintColor: Colors.black_85, marginHorizontal: 10},
    searchBox: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: Colors.white,
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 2,
        padding: 4,
        alignItems: 'center'
    },
    searchText: {
        flex: 1,
        marginEnd: 10
    }
});
