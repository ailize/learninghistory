import React, { useEffect, useState } from "react";
import VideoListBox from '../../components/VideoListBox/index'
import { HomeWrapper } from './style.js'
import { connect } from 'react-redux'
import { getRecommendList } from './store/actionCreators'


const Shouye = (props) => {
    const { data, enterLoading } = props;
    const { getRecommendListDispatch } = props;
    useEffect(() => {
        getRecommendListDispatch();
    }, [])
    return (
        <HomeWrapper>
            <VideoListBox enterLoading={enterLoading} videos={data} />
        </HomeWrapper >
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.shouye.data,
        enterLoading: state.shouye.enterLoading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendListDispatch() {
            dispatch(getRecommendList())
        },
        // changeEnterLoadingDispatch() {
        //     dispatch(changeEnterLoading())
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shouye)

// rmc / rsc 快速生成