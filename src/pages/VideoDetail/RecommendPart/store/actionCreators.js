import * as actionTypes from './constants'
import {
    getRecommendedRequest
} from '@/api/request'

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_RECOMMENDED_LOADING,
    data
})

const changeRecommended = (data) => ({
    type: actionTypes.SET_RECOMMENDED,
    data
})

export const getRecommended = () => {
    return (dispatch) => {
        getRecommendedRequest()
            .then(data => {
                // console.log(data.data.result);
                dispatch(changeRecommended(data.data.result))
                dispatch(changeEnterLoading(false))
            })
    }
}