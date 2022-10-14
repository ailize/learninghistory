import axios from 'axios'
import { axiosInstance } from "./config";

export const getRecommendListRequest =
    () => axiosInstance.get(`/videolist`)
// () => axiosInstance.get(`/x/web-interface/ranking/region?rid=168&day=7&context=`)

export const getTest =
    () => axios.get(`https://api.bilibili.com/x/web-interface/dynamic/region?rid=24&pn=2`)
// 待解决 跨域请求问题

export const getFourCardListRequest =
    () => axiosInstance.get('/fourcardlist')

export const getArchiveListRequest =
    () => axiosInstance.get('/archivelist')

export const getRecommendedRequest =
    () => axiosInstance.get('/recommended')

export const getCommentsListRequest =
    () => axiosInstance.get('/commentslist')

export const getMADListRequest =
    () => axiosInstance.get('/madlist')

export const getMMDListRequest =
    () => axiosInstance.get('/mmdlist')

export const getSuggestListRequest =
    (query) => axios.get(`http://localhost:3300/search/suggest?keyword=${query}`)

export const getHotwordsRequest =
    () => axios('http://localhost:3300/search/hotword')
