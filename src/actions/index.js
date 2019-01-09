export const LOAD_DRILLS = 'LOAD_DRILLS';
export function loadDrills() {
    return async (dispatch) => {
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        const response = await fetch('http://localhost:3000/');
        console.log(response)
        const json = await response.json()
        console.log(json)
        dispatch({
            type: LOAD_DRILLS,
            drills: json
        })
    }
}

export const SELECT_DRILL = 'SELECT_DRILL';
export function selectDrill(id) {
    return async(dispatch => {
        dispatch({
            type: SELECT_DRILL,
            selectedDrill: id
        })
    })
}

export const COMPLETE_DRILL = 'COMPLETE_DRILL';
export function completeDrill(id) {
    return ({
        type: COMPLETE_DRILL,
        drillId: id
    })
}

export const GENERATE_DRILLS = 'GENERATE_DRILLS';
export function generateDrills(kind, position, move) {
    return ({
        type: GENERATE_DRILLS,
        kind,
        position,
        move
    })
}