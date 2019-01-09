import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const onBtnPress = (route) => {
    Actions[route].call();
};

const Button = ({ children, route, target }) => {
    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={() => Actions[route]()}>
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
        backgroundColor: '#3498db',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRigth: 5
    }
}
export default Button;