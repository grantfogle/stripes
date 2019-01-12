import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            solo: 'false',
            reps: 10,
            description: '',
            // position: ''
        }
    }

    //fetch request to database
    onFormSubmit = () => {
        fetch('localhost:3000/', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => console.log(response.json));
    }
    //add into state?
    updatingText = (text, label) => {
        this.setState({ [label]: text })
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
                            label="Solo"
                            name="solo"
                            updatingText={this.updatingText}
                            placeholder="Partner or Solo?"
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
                            label="Description"
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
                    <CardSection>
                        <Input
                            label="Position"
                            name="position"
                            // updatingText={this.updatingText}
                            placeholder="Back control, guard, side control, etc."
                        />
                    </CardSection>
                    <CardSection>
                        <Button>
                            Create Drill
                    </Button>
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
});

export default CreateDrill;