import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    title='Login' 
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}
