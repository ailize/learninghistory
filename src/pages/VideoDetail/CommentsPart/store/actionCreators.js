import * as actionTypes from './constants'
import { getCommentsListRequest } from '@/api/request'

const changeCommentList = (data) => ({
    type: actionTypes.SET_COMMENTLIST,
    data
})

export const getCommentList = () => {
    return (dispatch) => {
        getCommentsListRequest() // 异步请求 axios 外部数据
            .then(data => {
                dispatch(changeCommentList(data.data.replies))
            })
    }
}

export const changeDianzan = (id) => {
    return ({ // 通知点赞模块调整点赞状态
        type: actionTypes.SET_DIANZAN,
        id
    })
}
