import React, {Component} from 'react'
import PropsTypes from 'prop-types'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {color_primary} from '../values/Colors'
import {Utility} from "../util";

class Tags extends Component {

    static defaultProps = {

        title: "Item",
        dataKey:"title",
        data:null,
        onCancel:function (data) {
            Utility.log(data);
        }
    };
    createTag = () => {

        if (this.props.data != null){

            let data = this.props.data.map((item) =>{

                return this.tagView(item)

            });
            return data

        }else{

            return null
        }

    };

    render() {

        return (<View style={styles.tag_container}>
            {this.createTag()}
        </View>)
    }
    tagView = (item) => {

        return (<View style={[styles.container, { borderRadius: this.state.height }]} onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            this.setState({
                height: height
            });
            //console.log("------------>" + height)

        }}>
            <Text style={styles.title_style}>{item[this.props.dataKey]}</Text>
            <TouchableOpacity onPress={() => {

                this.props.onCancel(item)
            }}>
                <Image tintColor={color_primary} style={styles.cancel_image} source={require('../assets/drawable/cancel.png')} />
            </TouchableOpacity>
        </View>)
    }

    constructor(props) {

        super(props);
        this.state = {
            height: 20
        }
    }
}

Tags.propTypes = {

    title: PropsTypes.string,
    dataKey:PropsTypes.string,
    data:PropsTypes.array,
    onCancel:PropsTypes.func
};

const styles = StyleSheet.create({

    tag_container: {

        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',

    },

    container: {

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderColor: color_primary,
        borderWidth: 1.5
    },

    title_style: {

        color: color_primary,
        fontSize: 14,
        fontWeight: '800',
    },
    cancel_image: {

        marginLeft: 10,
        width: 18,
        height: 18
    }

});


export default Tags