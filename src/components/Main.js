import React, { Component } from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Card from './reusable/Card';
import CardSection from './reusable/CardSection';
import Button from './reusable/Button';
// import Footer from './Footer';
import Tag from './reusable/Tag';
import ButtonTwo from './reusable/ButtonTwo';
import { Actions } from 'react-native-router-flux';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterOptions: {
                warmup: { name: 'Warmup', status: false },
                solo: { name: 'Solo', status: false },
                partner: { name: 'Partner', status: false },
                fullGuard: { name: 'Full Guard', status: false },
                backControl: { name: 'Back Control', status: false },
                halfGuard: { name: 'Half Guard', status: false },
                sideControl: { name: 'Side Control', status: false },
                fullMount: { name: 'Full Mount', status: false },
                takedown: { name: 'Takedown', status: false },
                escape: { name: 'Escape', status: false },
                sweep: { name: 'Sweep', status: false },
                submission: { name: 'Submission', status: false },
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

    generateDrills = () => {
        let filteredDrills = this.state.filterOptions.map(drill => drill.status === true);
        console.log(filteredDrills);
    }
    //generateDrills()
    //add action, take filters, use filters as a way to parse through data
    //warmup vs drill
    //solo vs partner
    //escape/sweeps vs submissions
    //backcontrol vs halfguard vs full guard vs sidecontrol vs takedowns


    render() {
        const { buttonContainer } = styles;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>What do you feel like training today?</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.filterTags}>
                        <Tag>Solo</Tag>
                        <Text style={styles.textStyle}>
                            vs
                        </Text>
                        <Tag>Partner</Tag>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.filterTags}>
                        <Tag>Warmup</Tag>
                        <Text style={styles.textStyle}>
                            or
                        </Text>
                        <Tag>Drill</Tag>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.filterTags}>
                        <Tag>Esc/Sweeps</Tag>
                        <Text style={styles.textStyle}>
                            or
                        </Text>
                        <Tag>Subs</Tag>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.filterTags}>
                        <Text style={styles.textStyle}>Positions</Text>
                        <Tag>Back Control</Tag>
                        <Tag>Full Mount</Tag>
                        <Tag>Side Control</Tag>
                        <Tag>Half Guard</Tag>
                        <Tag>Full Guard</Tag>
                    </View>
                </View>
                {/* <View style={styles.content}>
                    <View style={styles.filterTags}>{this.generateDrillTags()}</View>
                </View> */}
                <View style={buttonContainer}>
                    <ButtonTwo route="drills">Generate New Drills</ButtonTwo>
                    {/* <Button route="drills" action={true} func={this.generateDrills}>Generate New Drills</Button> */}
                </View>
                <Footer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 40,
    },
    filterTags: {
        width: 100,
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    unclickedStyle: {
        backgroundColor: '#336699',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#336699',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonContainer: {
        marginTop: 40,
        width: 200,
        height: 40,
    }
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