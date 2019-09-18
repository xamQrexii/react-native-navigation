import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Home Component </Text>
                <Button
                    title="Goto About Screen"
                    onPress={() => this.props.navigation.navigate('About')}
                />
            </View>
        )
    }
}
