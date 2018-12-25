import React from 'react';
import { View, Text } from 'react-native';

const WelcomeHeader = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        < View style={styles.welcomeHeaderStyle} >
            <Text style={styles.h1WelcomeStyle}>Welcome to Stripes</Text>
            <Text style={styles.h2WelcomeStyle}>Daily BJJ Training App</Text>
        </View >
    );
}

const styles = {
    welcomeHeaderStyle: {},
    h1WelcomeStyle: {},
    h2WelcomeStyle: {}
}

export default WelcomeHeader;