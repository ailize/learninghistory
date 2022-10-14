import React, { memo, useEffect, useState } from "react";
import FourCardList from '@/components/FourCardList'
import VideoListBox from "../../../components/VideoListBox";
import { DotLoading } from 'antd-mobile'
import { getFourCardListRequest } from '@/api/request'
import { connect } from 'react-redux'
import { getFourCardList, changeEnterLoading } from './store/actionCreators'


const DonghuaTuijian = (props) => {
    const { typename, data, enterLoading, type } = props;
    const { getFourCardListDispatch, changeEnterLoadingDispatch } = props;
    useEffect(() => {
        getFourCardListDispatch();
    }, [])
    // console.log(type[0], type[1]);
    const Loading = () => {
        return (
            <div style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}>
                <span>施法加载中(　o=^•ェ•)o　┏<DotLoading /></span>
            </div>
        )
    }
    return (
        <>
            {enterLoading && <Loading />}
            {/* <FourCardList data={data} showLoading={enterLoading} types={typename} /> */}
            <FourCardList data={data} showLoading={enterLoading} type={type} />
            {/* <FourCardList videos={data} showLoading={showLoading} types={typename} />
            <FourCardList videos={data} showLoading={showLoading} types={typename} /> */}
        </ >
    )
}
const mapStateToProps = (state) => {
    return {
        typename: state.donghuatuijian.typename,
        data: state.donghuatuijian.data,
        enterLoading: state.donghuatuijian.enterLoading,
        type: state.donghuatuijian.type,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getFourCardListDispatch() {
            dispatch(getFourCardList())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(DonghuaTuijian))