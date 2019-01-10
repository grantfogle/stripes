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
            filterOptions: {
                warmup: false,
                solo: false,
                partner: false,
                fullGuard: false,
                backControl: false,
                halfGuard: false,
                sideControl: false,
                fullMount: false,
                takedown: false,
                escape: false,
                sweep: false,
                submission: false
            }
        }
    }

    handleClick = (event, name) => {
        console.log(name)
        console.log(this.state.filterOptions)
        let filterOptions = Object.assign({}, this.state.filterOptions)
        filterOptions[name] = !this.state.filterOptions[name];
        this.setState({ filterOptions })
        console.log(this.state.filterOptions)
    }


    generateDrillTag() {
        return this.state.drills.map(drill => (<Tag title="drills" name={drill.name} clicked={drill.clicked} handleClick={this.handleClick}>{drill.name}</Tag>))
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
                            <Tag name="warmup"
                                clicked={this.state.filterOptions.warmup}
                                handleClick={this.handleClick} >
                                Warmup
                            </Tag>
                            <Tag name="solo"
                                clicked={this.state.filterOptions.solo}
                                handleClick={this.handleClick} >
                                Solo
                            </Tag>
                            <Tag name="partner"
                                clicked={this.state.filterOptions.partner}
                                handleClick={this.handleClick}>
                                Partner
                            </Tag>
                        </View>
                        <View style={styles.filterTagsRow}>
                            <Tag name="fullGuard"
                                clicked={this.state.filterOptions.fullGuard}
                                handleClick={this.handleClick}>
                                Full Guard
                            </Tag>
                            <Tag name="backControl"
                                clicked={this.state.filterOptions.backControl}
                                handleClick={this.handleClick}>
                                Back Control
                            </Tag>
                            <Tag name="halfGuard"
                                clicked={this.state.filterOptions.halfGuard}
                                handleClick={this.handleClick}>
                                Half Guard
                            </Tag>
                            <Tag name="sideControl"
                                clicked={this.state.filterOptions.sideControl}
                                handleClick={this.handleClick}>
                                Side Control
                            </Tag>
                            <Tag name="fullMount"
                                clicked={this.state.filterOptions.fullMount}
                                handleClick={this.handleClick}>
                                Full Mount
                            </Tag>
                            <Tag name="takedown"
                                clicked={this.state.filterOptions.takedown}
                                handleClick={this.handleClick}>Takedowns</Tag>
                        </View>
                        <View style={styles.filterTagsRow}>
                            <Tag name="escape"
                                clicked={this.state.filterOptions.escape}
                                handleClick={this.handleClick}>Escape</Tag>
                            <Tag name="sweep"
                                clicked={this.state.filterOptions.sweep}
                                handleClick={this.handleClick}>
                                Sweep
                            </Tag>
                            <Tag name="submission"
                                clicked={this.state.filterOptions.submission}
                                handleClick={this.handleClick}>Submissions</Tag>
                        </View>
                    </View>
                    <Card>
                        <CardSection>
                            <Button route="drills" action={true} func={this.props.generateDrills}>Generate New Drills</Button>
                        </CardSection>
                    </Card>
                </View>
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
        flexDirection: 'column',
        width: '100%',
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
    generateDrills: (filters) => dispatch({ type: 'GENERATE_DRILLS' })
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)