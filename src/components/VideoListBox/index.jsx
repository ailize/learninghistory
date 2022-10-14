import React, { memo } from 'react'
import { useEffect, useState } from 'react'
import { CardBox, VideoListWrapper } from './style'
import { Link } from 'react-router-dom'
import Card from '../Card'
import { DotLoading } from 'antd-mobile'
// import { getVideos } from '../../api/request'

export function VideoListBox({ enterLoading, videos = [] }) {
    // const [showLoading, setShowLoading] = useState(true)
    // const [videos, setVideos] = useState([])
    // useEffect(() => {
    //     (async () => {
    //         // 试着根据不同路由请求不同数据 -- 0628
    //         let { data: videoData } = await getVideos();
    //         // let { data: { data: Test } } = await getTest(); //外部api直接调用
    //         // console.log(Test)
    //         // console.log(videoData)
    //         setVideos(videoData)
    //         setShowLoading(false)
    //     })()
    // }, [])
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
            <VideoListWrapper>
                <CardBox className="card-box">
                    {
                        videos.map(video => {
                            return <Card className='v-card' video={video} key={video.aid} />
                        }
                        )
                    }
                </CardBox>
            </VideoListWrapper>
        </>
    )
}

export default memo(VideoListBox)