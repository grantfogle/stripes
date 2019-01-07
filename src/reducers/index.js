import { combineReducers } from 'redux';

function drills(state = [], action) {
    switch (action.type) {
        // case 'ADD_POST':
        //     return [...state, action.post];
        case 'LOAD_DRILLS':
            console.log(action.drills)
            return action.drills;
        default:
            return state;
    }
}


export default combineReducers({
    drills
});