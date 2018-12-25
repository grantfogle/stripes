import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import WelcomeHeader from './WelcomeHeader';

class LoginForm extends Component {
    state = { email: '', password: '' };
    render() {
        return (
            <View>
                {/* <WelcomeHeader /> */}
                <Card>
                    <Text style={styles.loginHeaderStyle}>Sign In</Text>
                    <CardSection>
                        <Input
                            placeholder="Email"
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="Password"
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = {
    welcomeHeaderStyle: {
        alignSelf: 'center',
        height: 200,
        width: 200,
        backgroundColor: 'purple'
    },

    loginHeaderStyle: {
        alignSelf: 'center',
        width: 200,
        fontSize: 20,
        backgroundColor: '#f8f8f8',
        textAlign: 'center',
        padding: 5
    }
}

export default LoginForm;