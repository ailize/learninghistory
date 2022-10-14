import * as actionTypes from './constants'

const defaultState = {
    type:
    {
        typename: "推荐",
        typepath: "/donghua/1"
    }
    ,
    typename: [],
    data: [],
    enterLoading: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_FOURCARDLIST:
            return {
                ...state,
                data: action.data
            }
        case actionTypes.SET_TYPENAME:
            return {
                ...state,
                typename: action.data
            }
        case actionTypes.SET_TYPE:
            return {
                ...state,
                type: action.data
            }
        case actionTypes.CHANGE_TUIJIAN_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state;
    }
}