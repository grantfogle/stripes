import { combineReducers } from 'redux';

function drills(state = [], action) {
    switch (action.type) {
        // case 'ADD_POST':
        //     return [...state, action.post];
        case 'LOAD_DRILLS':
            console.log(action.drills)
            return action.drills;
        case 'SELECT_DRILLS':
            return action.selectedDrill;
        case 'COMPLETE_DRILL':
            console.log('complete drill is running in reducers')
            console.log(action.drillId)
            return state.filter(drill => drill.id !== action.drillId)
        default:
            return state;
    }
}


export default combineReducers({
    drills
});