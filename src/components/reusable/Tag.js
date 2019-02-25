import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tag = ({ name, clicked, handleClick, children }) => {
    return (
        <TouchableOpacity style={styles.unclickedStyle} onPress={() => console.log('cats')}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity >
    )
}

const styles = {
    unclickedStyle: {
        backgroundColor: '#9b59b6',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9b59b6',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        opacity: .5,
    },
    clickedStyle: {
        backgroundColor: '#336699',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9b59b6',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        opacity: 1
    },
    textStyle: {
        alignSelf: 'center',
        color: '#f0f0f0',
        fontSize: 24,
        fontWeight: '400',
        paddingLeft: 5,
        paddingRight: 5,
    },
}


export default Tag;