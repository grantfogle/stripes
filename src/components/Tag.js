import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class Tags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    // const Tags = ({ children, color }) => {
    //need to add class on click update opacity
    render() {
        return (
            <TouchableOpacity
                // style={styles.tagStyle}
                onPress={() => {
                    console.log(this.state.clicked)
                    this.setState({ clicked: !this.state.clicked })
                }}
                style={(this.state.clicked ? styles.clickedStyle : styles.unclickedStyle)
                }
            >
                <Text style={styles.textStyle}>{this.props.children}</Text>
            </ TouchableOpacity >
        )
    }

}

const styles = StyleSheet.create({
    unclickedStyle: {
        backgroundColor: '#9b59b6',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9b59b6',
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        marginBottom: 2,
        opacity: .5,
    },
    clickedStyle: {
        backgroundColor: '#9b59b6',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9b59b6',
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        marginBottom: 2,
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
})

export default Tags;