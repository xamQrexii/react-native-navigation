import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class About extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> About Component </Text>
            <Button
                    title="Goto Contact Screen"
                    onPress={() => this.props.navigation.navigate('Contact')}
            />
        </View>
        )
    }
}
