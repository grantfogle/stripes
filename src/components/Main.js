import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import DrillCard from './DrillCard';
import CardSection from './CardSection';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drills: '',
            completed: false
        }
    }

    async componentDidMount() {
        const proxy = '';
        const response = await fetch('http://localhost:3000/')
        const json = await response.json();
        this.setState({ drills: json })
        console.log(this.state.drills)
    }

    renderDrills() {
        if (this.state.drills.length > 0) {
            return <DrillCard drills={this.state.drills} />
        }

    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderDrills()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
    // drillCard: {
    //     fontSize: 20,
    // }
});

export default Main;