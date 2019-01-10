import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, TouchableOpacity, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

//might have to change this to a classful component so it rerenders when clicked

class DrillCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: false,
            show: false
        }
    }

    handleDrill() {
        return this.setState({ completed: !this.state.completed })
    }

    //create an object in the store that stores the id of a clicked element

    showDrill(selectedId) {
        const { description, id } = this.props.drill;
        if (selectedId === id) {
            this.setState({ show: !this.state.show });
        }
    }

    showDescription() {
        if (this.state.show) {
            return (
                <View style={styles.rowStyle}>
                    <Text>{this.props.drill.description}</Text>
                </View>
            );
        }
    }

    render() {
        const { id, name, description } = this.props.drill;
        console.log('cats: ', this.props.drill)
        return (
            <TouchableWithoutFeedback
                onPress={() => this.showDrill(id)} style={styles.containerStyle}>
                <View>
                    <View style={styles.rowStyle}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.completeDrill(id)} >
                            <Text>{this.state.completed ? '' : ''}</Text>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>{name}</Text>
                    </View>
                    {this.showDescription()}
                </View>
            </TouchableWithoutFeedback>
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
        width: '100%',
    },
    buttonStyle: {
        backgroundColor: '#3498db',
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#fff',
    },
    textStyle: {
        width: '80%',
        fontSize: 30,
    },
    rowStyle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
})


//probably don't need this
function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
    completeDrill: (id) => dispatch({ type: 'COMPLETE_DRILL', drillId: id })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrillCard)