import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, TouchableOpacity, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

//might have to change this to a classful component so it rerenders when clicked

class DrillCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: false
        }
    }

    handleDrill() {
        return this.setState({ completed: !this.state.completed })
    }

    //create an object in the store that stores the id of a clicked element

    renderDescription(id) {
        const { description } = this.props.drill;
        return (
            <Text>{description}</Text>
            // <View style={styles.rowStyle}>
            //     <Text>{this.renderDescripton}</Text>
            // </View>
        )
    }

    selectDrill = () => {

    }


    render() {
        const { id, name, descripton } = this.props.drill;
        console.log('cats: ', this.props.drill)
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectDrill()} style={styles.containerStyle}>
                {/* <View  > */}
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle}>{name}</Text>
                    {/* Hey yo this is gunna remove the drill */}
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.handleDrill()} >
                        <Text>{this.state.completed ? 'Y' : 'N'}</Text>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
                {/* {this.renderDescription(id)} */}
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

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
    showDescription: (id) => dispatch(showDescription(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrillCard)