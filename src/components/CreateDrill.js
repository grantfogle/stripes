import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from './reusable/Input';
import Card from './reusable/Card';
import CardSection from './reusable/CardSection';
import Button from './reusable/Button';
import Container from './Container';



class CreateDrill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            skill_level: '',
            type: '',
            description: '',
            created: false,
            // position: ''
        }
    }

    //fetch request to database
    submitDrill = () => {
        let { name, skill_level, type, description } = this.state;
        let finalObj = {
            name,
            skill_level,
            type,
            solo: false,
            reps: 10,
            description
        }

        fetch('http://localhost:3000/', {
            method: 'POST',
            body: JSON.stringify(finalObj),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => console.log(response.json));
    }
    //add into state?
    updatingText = (text, name) => {
        this.setState({ [name]: text })
    }

    showDrillStatus = () => {
        this.setState({ created: true });
        setTimeout(function () {
            this.setState({ created: false });
        }
            .bind(this),
            3500);
    }

    render() {
        console.log(this.state)
        return (
            <Container>
                <Card>
                    <Text style={styles.loginHeaderStyle}>Add a New Drill</Text>
                    <CardSection>
                        <Input
                            label="Name"
                            name="name"
                            updatingText={this.updatingText}
                            placeholder="Drill Name"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Belt Level"
                            name="skill_level"
                            updatingText={this.updatingText}
                            placeholder="Current Belt Level"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Drill Desc."
                            name="description"
                            updatingText={this.updatingText}
                            placeholder="Description"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Type"
                            name="type"
                            updatingText={this.updatingText}
                            placeholder="Warmup/Sub/Sweep/Escape"
                        />
                    </CardSection>
                    {/* <CardSection>
                        <Input
                            label="Position"
                            name="position"
                            // updatingText={this.updatingText}
                            placeholder="Back control, guard, side control, etc."
                        />
                    </CardSection> */}
                    <CardSection>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.submitDrill(), this.showDrillStatus() }}>
                            <Text style={styles.textStyle}>Create Drill</Text>
                        </TouchableOpacity>
                    </CardSection>
                </Card>
                <Text style={styles.alertBox}>{this.state.created ? 'Drill Created!' : ''}</Text>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    loginHeaderStyle: {
        alignSelf: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: '#8e44ad',
        color: 'white',
        textAlign: 'center',
        padding: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#8e44ad',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5
    },
    alertBox: {
        color: '#fff',
        fontSize: 24,
        height: 50,
        marginTop: 20,
    },
});

export default CreateDrill;