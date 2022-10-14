import {getMADListRequest} from '../../../api/request'
import React from 'react'
import {useState,useEffect} from 'react'
import { VideoListBox } from '../../../components/VideoListBox'

export default function MAD(){
    const [videos,setVideos] = useState();
    useEffect(()=>{
        (async()=>{
            const {data} = await getMADListRequest();
            setVideos(data)
        })()
    },[])
    return (
        <>
        <VideoListBox videos={videos}/>
        </>
    )
}