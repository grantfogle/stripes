import React, { Component } from 'React';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import DrillCard from './DrillCard';
import Card from './Card';
import CardSection from './CardSection';
import Tag from './Tag';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // drills1: '',
            drills: {},
            completed: false,
        }
    }

    renderDrills() {
        if (this.props.drills.length > 0) {
            return this.props.drills.map(drill => {
                return <DrillCard drill={drill} />;
            })
        }
    }

    // generateRandomDrills() {
    //     //Want to add input and filter functionality to this to include
    //     //types of drills, number of drills, belt level, solo/with a partner, 
    //     const random = 7;
    //     const array = this.props.drills;
    //     console.log('ARRAY: ', array)
    //     const finalArr = [];
    //     if (array.length > 0) {
    //         for (let i = array.length - 1; i > 0; i--) {
    //             var j = Math.floor(Math.random() * (i + 1));
    //             var temp = array[i];
    //             array[i] = array[j];
    //             array[j] = temp;
    //         }
    //         for (let i = 0; i < random; i++) {
    //             finalArr.push(array[i])
    //         }
    //         return finalArr.map(drill => <DrillCard drill={drill} />);

    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Training for ___________</Text>
                    <Text style={styles.headerText}>Completed 0/7</Text>
                    <Card>
                        <CardSection>
                            <Button>Keep Drilling...</Button>
                        </CardSection>
                    </Card>
                </View>

                <ScrollView styles={styles.drills}>
                    {this.renderDrills()}
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#3498db',
    },
    header: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#3498db',
        width: '100%',
        height: '50%',
        borderBottomColor: "white",
        borderBottomWidth: 2,
        marginBottom: 30,
    },
    headerText: {
        fontSize: 32,
        color: '#fff',
        fontWeight: '300',
        paddingRight: 10,
        paddingLeft: 10
    },
    drills: {
        // justifyContent: 'center',
        width: '100%',
        height: '50%',
    },
});

function mapStateToProps(state) {
    return {
        drills: state.drills,

    }
}

export default connect(mapStateToProps)(Main)
// export default Main;