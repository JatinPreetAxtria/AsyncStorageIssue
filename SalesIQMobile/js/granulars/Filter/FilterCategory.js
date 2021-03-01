import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as ImageAssest from "../../value/ImageAssest";
import * as Colors from "../../values/Colors";


class FilterCategory extends Component {

    constructor() {

        super()

    }

    render() {

        return (

            <View style={{ flex: 1, backgroundColor: this.isSelectedItem() ? 'white' : '#F9F9F9' }}>

                <View style={{ paddingLeft: 8, paddingRight: 15, paddingTop: 18, paddingBottom: 18, flex: 1, backgroundColor: 'transparent', flexDirection: 'row-reverse' }}>
                    <View style={{ flex: 0.1, flexDirection: 'row-reverse', alignItems: 'center', marginRight: 1 }}>
                        {this.getSelectedIcon()}
                    </View>
                    <View style={{ justifyContent:'flex-end',flex: 0.8, flexDirection: 'row-reverse' }}>
                        <Text style={{ color: this.isSelectedItem() ? Colors.orange_color : Colors.black, marginLeft: 4, marginRight: 4, justifyContent: 'center', alignItems: 'center', fontSize: 16, fontWeight: '400' }}>{(this.props.data != null) ? this.props.data.user : null}</Text>
                    </View>
                    <View style={{ flex: 0.1, flexDirection: 'row-reverse', alignItems: 'center' }}>
                        {this.getFilterSelectedIcon()}
                    </View>

                </View>
                <View style={{ width: '100%', height: 0.5, backgroundColor: Colors.seperater_color }} />
            </View>
        )
    }

    getSelectedIcon = () => {

        if (this.props.data != null && this.props.data != undefined) {

            if (this.props.data.isSelected == true) {

                return (

                    <Image style={{ height: 10, width: 10 }} resizeMode='cover' source={ImageAssest.icon_filter_opetion_selection} />
                )
            } else {

                return null
            }
        }
        return null
    }

    getFilterSelectedIcon = () => {

        if (this.props.selectedCount != null){

            if (this.props.selectedCount > 0 ){

                return (

                    <Image style={{ height: 15, width: 15 }} resizeMode='cover' source={ImageAssest.icon_filter_apply} />
                )
            } else {

                return null
            }
        }
        return null
    }

    getSelectedCount = () => {

        /*let data = this.props.data.data.filter((item) =>{

            return item.isSelected

        })

        return data.length*/

        return -1

    }

    isSelectedItem = () => {

        if (this.props.data != null && this.props.data != undefined) {

            return this.props.data.isSelected

        }
        return false
    }

}

export default FilterCategory;