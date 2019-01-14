import React, { Component } from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterOptions: {
                warmup: {
                    name: 'Warmup',
                    status: false,
                },
                solo: {
                    name: 'Solo',
                    status: false,
                },
                partner: {
                    name: 'Partner',
                    status: false,
                },
                fullGuard: {
                    name: 'Full Guard',
                    status: false,
                },
                backControl: {
                    name: 'Back Control',
                    status: false,
                },
                halfGuard: {
                    name: 'Half Guard',
                    status: false,
                },
                sideControl: {
                    name: 'Side Control',
                    status: false,
                },
                fullMount: {
                    name: 'Full Mount',
                    status: false,
                },
                takedown: {
                    name: 'Takedown',
                    status: false,
                },
                escape: {
                    name: 'Escape',
                    status: false,
                },
                sweep: {
                    name: 'Sweep',
                    status: false,
                },
                submission: {
                    name: 'Submission',
                    status: false
                },
            }
        }
    }

    handleClick = (name) => {
        this.setState((prevState) => {
            let filterOptions = Object.assign({}, prevState.filterOptions)
            filterOptions[name].status = !prevState.filterOptions[name].status;
            return { filterOptions };
        })
    }

    generateDrillTags = () => {
        const drillTags = this.state.filterOptions;
        const drills = [];
        for (let prop in drillTags) {
            drills.push(
                <TouchableOpacity style={drillTags[prop].status ? styles.clickedStyle : styles.unclickedStyle} onPress={() => this.handleClick(prop)}>
                    <Text style={styles.textStyle}>{drillTags[prop].name}</Text>
                </TouchableOpacity >
            )

        }
        return drills;

    }

    //generateDrills()
    //add action, take filters, use filters as a way to parse through data

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>What do you feel like training today?</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.filterTags}>{this.generateDrillTags()}</View>
                </View>
                <Card>
                    <CardSection>
                        <Button route="drills" action={true} func={this.props.generateDrills}>Generate New Drills</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
    },
    filterTags: {
        width: 100,
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 40,
    },
    headerText: {
        fontSize: 32,
        color: '#fff',
        fontWeight: '300',
        paddingRight: 10,
        paddingLeft: 10
    },
    drills: {
        width: '100%'
    },
    content: {
        height: 500,
        flexDirection: 'column',
        alignItems: 'center'
    },
    unclickedStyle: {
        backgroundColor: '#336699',
        // backgroundColor: '#9b59b6',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#336699',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    clickedStyle: {
        backgroundColor: '#9b59b6',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9b59b6',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        opacity: 1
    },
    textStyle: {
        alignSelf: 'center',
        color: '#f0f0f0',
        fontSize: 20,
        fontWeight: '400',
        paddingLeft: 5,
        paddingRight: 5,
    },
});

function mapStateToProps(state) {
    return {
        drills: state.drills,
    }
}

const mapDispatchToProps = (dispatch) => ({
    generateDrills: (filters) => dispatch({ type: 'GENERATE_DRILLS' })
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)