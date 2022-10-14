import * as actionTypes from './constants'

const defaultState = {
    data: [],
    enterLoading: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_RECOMMENDLIST:
            return {
                ...state,
                data: action.data
            }
        case actionTypes.CHANGE_RECOMMENDLIST_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state;
    }
}