import React from 'React';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import CreateDrill from './components/CreateDrill';

const RouterComponent = () => {
    return (
        <Router style={styles.container}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene
                        onRight={() => Actions.createDrill()}
                        rightTitle="Add Drill"
                        key="other"
                        component={Main}
                        title="Daily Jiu Jitsu"
                        initial
                    />
                    <Scene
                        key="createDrill"
                        component={CreateDrill}
                        title="Create a New Drill" />
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