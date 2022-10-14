import * as actionTypes from './constants'
import {
    getFourCardListRequest
} from '@/api/request'

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_TUIJIAN_LOADING,
    data
})

export const changetypename = (data) => ({
    type: actionTypes.SET_TYPENAME,
    data
})

const changeFourCardList = (data) => ({
    type: actionTypes.SET_FOURCARDLIST,
    data
})

const changetype = (typename, typepath) => ({
    type: actionTypes.SET_TYPE,
    data: { typename, typepath }
})
export const getFourCardList = () => {
    return (dispatch) => {
        getFourCardListRequest()
            .then(data => {
                console.log(data);
                dispatch(changetypename(data.data[0].typename))
                dispatch(changetype(data.data[0].typename, data.data[0].typepath))
                dispatch(changeFourCardList(data.data))
                dispatch(changeEnterLoading(false))
            })
    }
}