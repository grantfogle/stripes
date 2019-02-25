import React from 'React';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import CreateDrill from './components/CreateDrill';
import Drills from './components/Drills';

const RouterComponent = () => {
    return (
        <Router style={styles.container}>
            <Scene key="root">
                <Scene key="auth" hideNavBar>
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene
                    onRight={() => Actions.createDrill()}
                    rightTitle="New Session"
                    key="main"
                    component={Main}
                    title="Daily Jiu Jitsu"
                />
                <Scene
                    key="createDrill"
                    component={CreateDrill}
                    title="Create a New Drill" />
                <Scene
                    key="drills"
                    component={Drills}
                    title="Get Rolling" />
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