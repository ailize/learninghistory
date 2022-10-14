import { getMMDListRequest, getHotwordsRequest } from "../../../api/request";
import React from 'react'
import { useState, useEffect } from "react";
import { VideoListBox } from "../../../components/VideoListBox";

export default function MMD() {
    // const [hot, setHot] = useState([])
    // useEffect(() => {
    //     (async () => {
    //         const { data: { data } } = await getHotwordsRequest()
    //         setHot(data)
    //     })()
    // }, [])
    // console.log(hot);
    const [videos, setVideos] = useState();
    useEffect(() => {
        (async () => {
            const { data } = await getMMDListRequest();
            setVideos(data)
        })()
    }, [])
    // console.log(mmd);
    return (
        <>
            <VideoListBox videos={videos} />
        </>
    )
}
