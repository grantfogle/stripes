import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
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
            completed: false,
            // filters: [
            //     {warmup: false},
            //     {solo: false},
            //     {partner: false,
            //     {fullGuard: false,
            //     backControl: false,
            //     halfGuard: false,
            //     sideControl: false,
            //     fullMount: false,
            //     takedowns: false,
            //     escape: false,
            //     sweep: false,
            //     submissions: false
            // }]
        }
    }

    // renderDrills() {
    //     if (this.props.drills.length > 0) {
    //         return this.props.drills.map(drill => {
    //             return <DrillCard drill={drill} />;
    //         })
    //     }
    // }

    // addFilter(filter) {
    //     this.setState(this.state.filters.push(filter))
    // }

    generateRandomDrills() {
        //Want to add input and filter functionality to this to include
        //types of drills, number of drills, belt level, solo/with a partner, 

        const random = 5;
        const array = this.props.drills;
        console.log('ARRAY: ', array)
        const finalArr = [];
        if (array.length > 0) {
            for (let i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            for (let i = 0; i < random; i++) {
                finalArr.push(array[i])
            }
            return finalArr.map(drill => <DrillCard drill={drill} />);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>What do you feel like training today?</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.filterTags}>
                        <View style={styles.filterTagsRow}>
                            <Tag clicked={false}>Warmup</Tag>
                            <Tag>Solo</Tag>
                            <Tag>Partner</Tag>
                        </View>
                        <View style={styles.filterTagsRow}>
                            <Tag>Full Guard</Tag>
                            <Tag>Back Control</Tag>
                            <Tag>Half Guard</Tag>
                            <Tag>Side Control</Tag>
                            <Tag>Full Mount</Tag>
                            <Tag>Takedowns</Tag>
                        </View>
                        <View style={styles.filterTagsRow}>
                            <Tag color="#2ecc71">Escape</Tag>
                            <Tag color="#2ecc71">Sweep</Tag>
                            <Tag color="#2ecc71">Submissions</Tag>
                        </View>
                    </View>
                    <Card>
                        <CardSection>
                            <Button route="drills" action={true} func={this.generateRandomDrills()}>Generate New Drills</Button>
                        </CardSection>
                    </Card>
                </View>
                {/* </CardSection>
                    </Card> */}
            </View >
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
        // backgroundColor: '#3498db',
        width: '100%',
        height: 100,
    },
    filterTags: {
        width: 100,
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        width: '100%',
        // marginTop: 10,
        flexWrap: 'wrap',
        marginBottom: 40,
    },
    filterTagsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    headerText: {
        fontSize: 32,
        color: '#fff',
        fontWeight: '300',
        paddingRight: 10,
        paddingLeft: 10
    },
    drills: {
        // flex: 2,
        // justifyContent: 'center',
        width: '100%'
    },
    content: {
        height: 500,
        flexDirection: 'column',
        alignItems: 'center'
    }
});

function mapStateToProps(state) {
    return {
        drills: state.drills,
    }
}

const mapDispatchToProps = (dispatch) => ({
    generateDrills: (kind, position, move) => dispatch({ type: 'GENERATE_DRILLS', kind, position, move })
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)
// export default Main;