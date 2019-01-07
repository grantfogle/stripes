export const LOAD_DRILLS = 'LOAD_DRILLS';
export function loadDrills() {
    return async (dispatch) => {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
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