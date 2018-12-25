import React from 'react';
import { View, Text } from 'react-native';

const WelcomeHeader = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        < View>
            <Text style={styles.h1WelcomeStyle}>Welcome to Stripes</Text>
            <Text style={styles.h2WelcomeStyle}>Daily BJJ Training</Text>
        </View >
    );
}

const styles = {
    h1WelcomeStyle: {
        color: '#f8f8f8',
        fontSize: 40,
        textAlign: 'center',
    },
    h2WelcomeStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#f8f8f8',
        marginBottom: 60
    }
}

export default WelcomeHeader;