import React, {Component} from 'react'
import {KeyboardAvoidingView, SafeAreaView, StyleSheet, View} from 'react-native'
import {Constants, Utility} from '../util/index';
import * as ImageAssest from '../value/ImageAssest';
import SalesIqStore from '../util/SalesIqStore';
import * as Colors from '../value/Colors';
// import PushNotification from 'react-native-push-notification';
// import {ScreenName} from "../util/Constants";
// import firebase from 'react-native-firebase';
// import {registerAppListener, unRegisterNotificationListener} from "../../util/FirebaseListeners";

const ACTION_TYPE_BACK = "back";
const ACTION_TYPE_DRAWER = "drawer";

class BaseComponent extends Component {

    constructor(props) {

        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.state = {
            associateClientFlag: "0"
        }
    }

    async componentDidMount() {

        // Utility.log('BaseComponent>>>>>>>')

        let storeObject = new SalesIqStore();
        const promise = storeObject.getAsyncValueInPersistStore(Constants.ASSOCIATE_FLAG);
        promise.then(value => {
            this.setState({
                associateClientFlag: value,
            })

        });

    }



    render() {

        return (

            <SafeAreaView style={[styles.container, {backgroundColor: Colors.submit_button}]}>

                <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={-500} behavior='padding'>
                    <View style={styles.container}>

                        {Utility.getActionBar(
                            {title: (this.props.title !== undefined) ? this.props.title : ""},
                            this.props.rightIcon,
                            {

                                leftIconImage: this.getIcon(),
                                disableShadows: true
                            },
                            {onLeftPress: this.openDrawer}, {styleType: this.getStyleAttr()}, {associateClientFlag: this.state.associateClientFlag},
                            {filterCount:(this.props.filterCount != null) ? this.props.filterCount : 0}

                        )}
                        {(this.props.container != null) ? this.props.container : this.props.children}
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }

    getStyleAttr() {
        if (this.props.leftButtonAction === ACTION_TYPE_BACK) {

            return "1"

        } else if (this.props.leftButtonAction === ACTION_TYPE_DRAWER) {


            return "2"

        }
        return null

    }

    getIcon = (type) => {

        if (this.props.leftButtonAction === ACTION_TYPE_BACK) {

            return ImageAssest.icon_back

        } else if (this.props.leftButtonAction === ACTION_TYPE_DRAWER) {


            return ImageAssest.icon_drawer

        }
        return null
    }

    openDrawer() {
        console.log("basecomponent", this.props)
        if (this.props.leftButtonAction !== null) {
            if (this.props.leftButtonAction === ACTION_TYPE_BACK) {
                this.props.navigation.goBack()
            } else if (this.props.leftButtonAction === ACTION_TYPE_DRAWER) {
                this.props.navigation.toggedrawer()
                
            }
        }
    }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: Colors.submit_button
    }
});

export {BaseComponent, ACTION_TYPE_BACK, ACTION_TYPE_DRAWER}
