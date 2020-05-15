import * as types from '../actions/action-types';

export const defaultState = {
    currentUser : {},
    currentUserId: null
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case types.SET_USER :
            return {
                ...state,
                currentUser : action.data
            }

            case types.SET_USER_ID :
            return {
                ...state,
                currentUserId : action.data
            }

        default : return state;
    }
}

export default reducer;