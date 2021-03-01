
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as Progress from 'react-native-progress'
import { View, Text, Platform } from 'react-native';
import * as Colors from '../../value/'

class ProgressView extends Component {

    constructor(props) {

        super(props)
    }

    static defaultProps = {

        progress: 0

    }

    render() {

        return (

            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', width: '100%', height: '100%' }}>
                <View style={{ position: 'absolute', backgroundColor: 'black', opacity: 0.5, width: '100%', height: '100%' }} />
                <View style={{ padding: 10, backgroundColor: 'white', height: '18%', width: '80%' }}>

                    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                        <Text>Downloading file. Please wait...</Text>
                    </View>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 8 }}>
                                <Progress.Bar
                                    style={{ marginBottom: 0 }}
                                    borderWidth={0}
                                    unfilledColor={'gray'}
                                    color={Colors.orange_color}
                                    alignSelf='center'
                                    progress={this.props.progress}
                                    width={null} 
                                    height={3}/>
                                

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text>{parseInt(this.props.progress * 100) + '%'}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                                <Text>{parseInt(this.props.progress * 100) + "/100"}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

        )
    }
}

ProgressView.propTypes = {

    progress: PropTypes.number
};

export default ProgressView