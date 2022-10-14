import React,{memo} from 'react'
import { useEffect, useState } from 'react'
import { CardBox, VideoListWrapper, VideoListBar } from './style'
import { Link } from 'react-router-dom'
import Card from '../Card'
export function FourCardList({data=[],type}){
    console.log(data,type,type.typename,type.typepath);
    const four = data.slice(0,4)
    return (
        <>
            <VideoListWrapper>
                <VideoListBar>
                    <span className="bt">{type.typename}</span>
                    <Link to={type.typepath} className="more">
                        查看更多<i className="iconfont gengduo1"></i>
                    </Link>
                </VideoListBar>
                <CardBox>
                    {
                        four.map(video => {
                            return <Card video={video} key={video.aid} />
                        })
                    }
                </CardBox>
            </VideoListWrapper>
        </>
    )
}
export default memo(FourCardList)