import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Colors from "../../value/Colors";

class NotificationHeader extends Component {
    render() {

        if (this.props.isActive == true) {
            //  GaHandler.sendEvent(GaConstants.GA_TYPE_EVENT, "Group opening through tapping", "Notif_Grp_Open_Tap");
        }
        return (<View style={styles.container}>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, marginTop: 4, marginBottom: 4}}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    {/* <View style={{ marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} resizeMode='cover' source={(this.props.isActive == true) ? ImageAssest.icon_arrow_up : ImageAssest.icon_arrow_down} />
                </View> */}
                </View>
                <View style={styles.seperator}/>
            </View>

        )
    }

}

const styles = StyleSheet.create({

    container: {

        padding: 0,
        backgroundColor: '#f9fafc',
    },

    title: {

        padding: 10,
        fontSize: 14,
        fontWeight: '600',
        color: Colors.orange_color
    },

    seperator: {

        height: 1,
        width: '100%',
        backgroundColor: '#d6d7da'
        //backgroundColor: 'red'
    }


})

export default NotificationHeader