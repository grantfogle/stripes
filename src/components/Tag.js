import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// class Tags extends Component {
//     constructor(props) {
//         super(props)
//     }
//     // const Tags = ({ children, color }) => {
//     //need to add class on click update opacity
//     render() {
//         return (
//             <TouchableOpacity
//                 // style={styles.tagStyle}
//                 onPress={(e) => {
//                     // console.log(this.state.clicked);
//                     // this.setState({ clicked: !this.state.clicked })
//                     this.props.handleClick(e, this.props.name)
//                 }}
//                 style={(this.props.clicked ? styles.clickedStyle : styles.unclickedStyle)
//                 }
//             >
//                 <Text style={styles.textStyle}>{this.props.children}</Text>
//             </ TouchableOpacity >
//         )
//     }

// }

const Tags = ({ name, clicked, handleClick, children }) => {
    return (
        <TouchableOpacity
            // style={styles.tagStyle}
            onPress={() => {
                // console.log(this.state.clicked);
                // this.setState({ clicked: !this.state.clicked })
                handleClick(name)
            }}
            style={(clicked ? styles.clickedStyle : styles.unclickedStyle)
            }
        >
            <Text style={styles.textStyle}>{children}</Text>
        </ TouchableOpacity >
    )
}

// const styles = StyleSheet.create({
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
        backgroundColor: '#9b59b6',
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


export default Tags;