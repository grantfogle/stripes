import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const onBtnPress = (route) => {
    Actions[route].call();
};

const Button = ({ children, route, action, func }) => {
    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={() => {
            Actions[route]();
            (action ? func : '');
        }}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#8e44ad',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#8e44ad',
        marginLeft: 5,
        marginRigth: 5
    }
}
export default Button;