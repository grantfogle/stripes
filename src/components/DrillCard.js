import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

//might have to change this to a classful component so it rerenders when clicked

class DrillCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drills: '',
            completed: false
        }
    }

    handleDrill() {
        return this.setState({ completed: !this.state.completed })
    }

    renderDrills() {
        if (this.props.drills.length > 0) {
            return this.props.drills.map(drill => {
                return (
                    <View style={styles.rowStyle}>
                        <Text style={styles.textStyle}>{drill.name}</Text>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.handleDrill(drill.id)} >
                            <Text>{this.state.completed ? 'Y' : 'N'}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        }
    }


    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderDrills()}
            </View>
        );
    };

}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 10,
        width: '100%',
    },
    buttonStyle: {
        backgroundColor: '#3498db',
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
    },
    textStyle: {
        width: '80%',
        fontSize: 30,
    },
    rowStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
})

export default DrillCard;