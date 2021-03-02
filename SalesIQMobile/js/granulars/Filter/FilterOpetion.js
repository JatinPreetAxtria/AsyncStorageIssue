import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as ImageAssest from "../../value/ImageAssest";
import * as Strings from "../../value/Strings";
import * as Colors from "../../value/Colors";



class FilterOpetion extends Component {

    constructor() {

        super()

        

    }



    render() {

        return (
           
            <View style={{ margin: 10, flexWrap: 'nowrap', flex: 1, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                {this.getSelectedIcon()}
                <Text numberOfLines = {1} style={{color:Colors.black, marginLeft: 10, marginRight: 10, fontSize: 14, fontWeight: '300' }}>{(this.props.data != null) ? this.props.data[this.props.serverkey] : null}</Text>
            </View>
        )
    }

    getSelectedIcon = () => {
        
        if (this.props.data != null && this.props.data != undefined) {

            if (this.props.data[this.props.serverkey + Strings.IS_SELECTED] == true) {

                return (

                    <Image style={styles.image_selected_unselected} resizeMode='cover' source={ImageAssest.icon_filter_select} />
                )

            } else {

                return <Image style={styles.image_selected_unselected} resizeMode='cover' source={ImageAssest.icon_filter_unselect} />
            }
        }
        return <Image style={styles.image_selected_unselected} resizeMode='cover' source={ImageAssest.icon_filter_unselect} />
    }

}

const styles = StyleSheet.create({

    image_selected_unselected: {

        height: 20,
        width: 20
    },


})

export default FilterOpetion;