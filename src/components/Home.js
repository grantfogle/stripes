import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Stylesheet } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drills: ['Warmup', 'Full Guard', 'Half Guard', 'Side Control', 'Open Guard', 'Full Mount', 'Back Control', 'Takedown']
        }
    }

    generateDrills() {
        return this.state.drills.map(drill => {
            return (
                <TouchableOpacity style={styles.drillbox}>
                    <Text>{drill}</Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <View>
                <Image source={{ uri: 'http://rollingandthepunches.com/kungfutoa/wp-content/uploads/photo-gallery/BJJ/BandW/BJJ_BW_009.jpg' }} />
                {/* Date */}
                {/* {this.drillBox} */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drillbox
})

export default Home;