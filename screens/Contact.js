import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Contact extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Contact Component </Text>
            <Button
                title="Goto Home Screen"
                onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
        )
    }
}
