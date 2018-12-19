import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class LoginForm extends Component {
    state = { email: '', password: '' }

    render() {
        return (
            <Card>
                <CardSection>
                    <Text>Sign in</Text>
                </CardSection>
                <CardSection>
                    <Text placeholder="email">Email</Text>
                </CardSection>
                <CardSection>
                    <Text placeholder="email">Email</Text>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;