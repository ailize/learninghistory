import React, { useEffect, useState, memo } from "react";
import { VideoWrapper, AppBtnWrapper } from './style'
import videoFace from '../../assets/images/common/videoStand.jpg'
import VideoInfo from './VideoInfo'
import TabPart from "./Tabs";



const VideoDetail = () => {
    return (
        <div style={{ "position": "relative", "overflow": "hidden" }}>
            <VideoWrapper>
                <img src={videoFace} alt="" />
            </VideoWrapper>
            <AppBtnWrapper>
            </AppBtnWrapper>
            <VideoInfo />
            <TabPart />
        </div>
    )
}

export default memo(VideoDetail)

// rmc / rsc 快速生成