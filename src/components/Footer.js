import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


const Footer = () => {
    const { container, textStyle, section } = styles;
    //look at goals
    //add new session
    //generate drills
    return (
        <View styles={container}>
            <View styles={section}>
                <Icon name='trophy' type='font-awesome' color='#fff' size={40} />
                <Text>Goals</Text>
            </View>
            <View styles={section}>
                <Icon name='running' type='font-awesome' color='#fff' size={40} />
                <Text>Train</Text>
            </View>
            <View styles={section}>
                <Icon name='plus-circle' type='font-awesome' color='#fff' size={40} />
                <Text>Add Session</Text>
            </View>
        </View>
    )
}

const styles = {
    container: {
        width: '100%',
        height: 40,
        backgroundColor: 'gray',
        alignSelf: 'center',
    },
    section: {
        width: '33%',
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default Footer;