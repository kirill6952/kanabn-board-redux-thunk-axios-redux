



const initialState = {
    statuses: [],
    tasks: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STATUSES':
            return {...state, statuses: action.payload}

        case 'FETCH_TASKS':
            return state

        default:
            return state
    }
}