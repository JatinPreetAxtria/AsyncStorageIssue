import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Colors from "../../value/Colors";
import * as ImageAssest from "../../values/ImageAssest";
import * as Strings from "../../values/Strings";
import * as Utility from "../../util/Utility";

class NotificationCell extends Component {


    constructor(props) {

        super(props)
        this.state = {

            isSelected: this.props.isSelected,
            isEditMode: this.props.isEditMode
        }

    }

    UNSAFE_componentWillReceiveProps(nextPros) {

        this.state.isEditMode = nextPros.isEditMode
        this.state.isSelected = nextPros.isSelected
        //Utility.log('NEXT PROPS', JSON.stringify(this.props))
    }

    render() {

        return (

            <TouchableOpacity activeOpacity={1} onPress={() => {

                Utility.log('Edit Mode ---->', this.state.isEditMode)

                if (this.state.isEditMode == true) {

                    this.setState({ isSelected: !this.state.isSelected })
                    this.props.handleSelection(!this.state.isSelected,this.props.notificationId)
                }
                
            }} onLongPress={() => {

                if (this.props.handleLongPress) {

                    this.props.handleLongPress()
                    this.setState({ isSelected: !this.state.isSelected })
                }
            }}>
                <View style={[{ backgroundColor: (this.state.isEditMode == true && this.state.isSelected == true) ? '#f7e0c0' : '#f9fafc' }]}>
                    <View style={{ flex: 1, padding: 8 }}>
                        <View style={{ flex: 1,marginBottom:3}}>
                            <Text style={[styles.title,{fontWeight:'600'}]}>{this.props.title}</Text>
                            <Text style={styles.title}>{this.props.message}</Text>
                        </View>
                        <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 10, flexDirection: 'row-reverse', alignItems: 'center' }}>

                            <Text style={styles.created_date}>{this.props.createdDate}</Text>
                            <Image style={{ width: 14, height: 14 }} resizeMode='cover' source={ImageAssest.icon_clock} />
                        </View>
                    </View>
                    <View style={styles.seperator} />
                </View>
            </TouchableOpacity>

        )
    }

}

const styles = StyleSheet.create({

    title: {

        fontSize: 12,
        fontWeight: '100',
        color: 'black'
    },

    created_date: {

        marginLeft: 5,
        fontSize: 10,
        fontWeight: '100',
        color: 'black'
    },

    seperator: {

        height: 1,
        width: '100%',
        backgroundColor: '#d6d7da'
    }
})

export default NotificationCell