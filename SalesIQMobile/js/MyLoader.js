import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";
import { connect } from 'react-redux';
import { setLoadingAction } from './redux/actions/otherAction';
// import Fonts from '../../utils/Fonts';

class MyLoader extends Component {
    constructor(props) {
        super(props);
        // alert("s")
        this.stopLoader = this.stopLoader.bind(this)
    }

    componentDidMount() {
        // DeviceEventEmitter.addListener(StringConstants.STOP_LOADER_EVENT, this.stopLoader)
    }

    componentWillUnmount() {
        // DeviceEventEmitter.removeListener(StringConstants.STOP_LOADER_EVENT, this.stopLoader)
    }

    stopLoader() {
        this.props.setLoadingAction()
    }
    render() {
        return (
            <Spinner
                style={{ flex: 1 }}
                visible={this.props.loading ? this.props.loading : this.props.isLoading}
                textContent={this.props.customLoadingMsg ? this.props.customLoadingMsg : this.props.loadingMsg}
                color={'blue'}
                textStyle={{
                    color: 'blue',
                    // fontFamily: Fonts.bold,
                    textAlign: 'center',
                    fontSize: 14
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("Loader:", state.isLoadingReducer)
    // console.log("Loader:", state.loadingMsgReducer)
    return {
        isLoading: state.isLoadingReducer,
        loadingMsg: state.loadingMsgReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingAction: () => dispatch(setLoadingAction(false)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyLoader)

