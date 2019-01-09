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
            return state.filter(drill => drill.id !== action.drillId);
        case 'GENERATE_DRILLS':
            const random = 7;
            const array = state.drills;
            console.log('ARRAY: ', array)
            const finalArr = [];
            for (let i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            for (let i = 0; i < random; i++) {
                finalArr.push(array[i])
            }
            // return finalArr.map(drill => <DrillCard drill={drill} />);
            return { ...state, finalArr };
        default:
            return state;
    }
}


export default combineReducers({
    drills
});


// generateRandomDrills() {
//     const random = 7;
//     const array = state.drills;
//     console.log('ARRAY: ', array)
//     const finalArr = [];
//     for (let i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     for (let i = 0; i < random; i++) {
//         finalArr.push(array[i])
//     }
//     return finalArr.map(drill => <DrillCard drill={drill} />);

// }
