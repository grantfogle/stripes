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
                <View style={styles.belt}>
                    <View style={styles.beltWhiteStripe}></View>
                    <View style={styles.beltRedStripe}></View>
                    <View style={styles.beltWhiteStripe}></View>
                </View>
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
                        <Button route="main" action={false}>Log In</Button>
                        <Button route="createDrill">Sign Up</Button>
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
        width: 300,
        fontSize: 20,
        backgroundColor: '#9b59b6',
        color: 'white',
        textAlign: 'center',
        padding: 5
    },
    belt: {
        width: '100%',
        height: 40,
        backgroundColor: 'black',
        flexDirection: 'row',
        paddingLeft: 30,
        marginBottom: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'black',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    beltWhiteStripe: {
        height: '100%',
        width: 10,
        backgroundColor: 'white',
    },
    beltRedStripe: {
        height: '100%',
        width: 80,
        backgroundColor: 'red',
    }
}

export default LoginForm;