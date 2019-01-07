import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import DrillCard from './DrillCard';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // drills1: '',
            completed: false
        }
    }

    // async componentDidMount() {
    //     const proxy = '';
    //     const response = await fetch('http://localhost:3000/')
    //     const json = await response.json();
    //     this.setState({ drills1: json })
    //     console.log(this.state.drills)
    // }

    renderDrills() {
        if (this.props.drills) {
            return <DrillCard drills={this.props.drills} />
        }
    }

    generateRandomDrills() {
        const random = 3;
        //sort the array randomly
        //return top 3 results
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Get Training</Text>
                <Card>
                    <CardSection>
                        <Button>Generate New Drills</Button>
                    </CardSection>
                </Card>
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
    headerText: {
        fontSize: 32,
    },
    // drillCard: {
    //     fontSize: 20,
    // }
});

function mapStateToProps(state) {
    return {
        drills: state.drills,
    }
}

export default connect(mapStateToProps)(Main)
// export default Main;