import React from 'React';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';

const RouterComponent = () => {
    return (
        <Router style={styles.container}>

            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add Drill"
                        onRight={() => { console.log('right!!!') }}
                        key="other"
                        component={Main}
                        title="Daily Jiu Jitsu" />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
};

export default RouterComponent;