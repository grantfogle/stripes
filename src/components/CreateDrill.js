import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
                    <CardSection>
                        <Text>Add a New Drill</Text>
                    </CardSection>
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

// const styles = StyleSheet.create({

// });

export default CreateDrill;