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
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Card>
                    <Text style={styles.loginHeaderStyle} >Add a New Drill</Text>
                    <CardSection>
                        <Input
                            label="name"
                            placeholder="Drill Name"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="beltLevel"
                            placeholder="Current Belt Level"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="description"
                            placeholder="Description"
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="type"
                            placeholder="Sub/Sweep/Escape"
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