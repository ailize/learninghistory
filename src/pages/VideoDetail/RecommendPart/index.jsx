import React, { useEffect, useState } from "react";
import { ListWrapper } from './style'
import { connect } from 'react-redux'
import { getRecommended } from './store/actionCreators'
import VideoListBox from '@/components/VideoListBox'

const RecommendPart = (props) => {
    const { data, enterLoading } = props;
    const { getRecommendedDispatch } = props;
    useEffect(() => {
        getRecommendedDispatch();
    }, [])
    return (
        <ListWrapper>
            <VideoListBox enterLoading={enterLoading} videos={data} />
        </ListWrapper >
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.recommend.data,
        enterLoading: state.recommend.enterLoading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendedDispatch() {
            dispatch(getRecommended())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendPart)