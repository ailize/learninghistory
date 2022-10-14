import * as actionTypes from './constants'

const defaultState = {
    commentList: [],
    enterLoading: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_DIANZAN:
            return {
                ...state,
                commentList: state.commentList.map(item => {
                    if (item.rpid == action.id) {
                        if (!item.action) {
                            item.like++;
                            item.action++;
                        }
                        else {
                            item.like--;
                            item.action--;
                        }
                    }
                    return item
                }),
            }
        case actionTypes.SET_COMMENTLIST:
            return {
                ...state,
                commentList: action.data
            }
        default:
            return state;
    }
}