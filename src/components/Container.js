import React from 'react';
import { View } from 'react-native';

const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
}

export default Container;