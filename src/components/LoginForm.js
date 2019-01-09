import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import WelcomeHeader from './WelcomeHeader';
import Container from './Container';

class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {
        return (
            <Container>
                {/* <View style={styles.loginForm}> */}
                <WelcomeHeader style={styles.welcomeHeaderStyle} />
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
                    <CardSection>
                        <Button route="main">Log In</Button>
                        <Button route="createDrill">Sign Up</Button>
                        <Text onPress={() => this.handleLogin()}>Log In</Text>
                    </CardSection>
                </Card>
                {/* </View> */}
            </Container>

        )
    }
}

const styles = {
    loginForm: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeHeaderStyle: {
        height: 200,
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