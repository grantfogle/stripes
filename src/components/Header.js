import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.header}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 25,
        shadowColor: '#000',
        shadOffset: { width: 0, height: 2 },
        shadowOpactiy: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;