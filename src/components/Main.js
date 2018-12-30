import React, { Component } from 'React';
import { View, Text } from 'react-native';
import DrillCard from './DrillCard';
import CardSection from './CardSection';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drills: '',
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
            return this.state.drills.map(drill => {
                return (
                    <DrillCard>
                        <CardSection>
                            <Text>{drill.name}</Text>
                        </CardSection>
                    </DrillCard>
                )
            })
        }
    }

    render() {
        return (
            <View>
                {this.renderDrills()}
            </View>
        )
    }
}

export default Main;