import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from './Input';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
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
            2000);
    }

    render() {
        console.log(this.state)
        return (
            <Container>
                <Text style={{ display: (this.state.created ? 'flex' : 'none') }}>asdfasdf</Text>
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
                    {/* <CardSection>
                        <Input
                            label="Solo"
                            name="solo"
                            updatingText={this.updatingText}
                            placeholder="Partner or Solo?"
                        />
                    </CardSection> */}
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
            </Container>
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
    }
});

export default CreateDrill;