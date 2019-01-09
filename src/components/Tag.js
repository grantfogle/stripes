import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Tags = ({ children, color }) => {
    //need to add class on click update opacity

    return (
        <TouchableOpacity style={{ backgroundColor: color }} style={styles.tagStyle}  >
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity >
    )
}

const styles = {
    tagStyle: {
        backgroundColor: '#9b59b6',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9b59b6',
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        marginBottom: 2,
        opacity: .4,
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

export default Tags;