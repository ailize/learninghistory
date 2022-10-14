import React from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router'
import Shouye from '../pages/Shouye'
const MMD = lazy(() => import('../pages/Donghua/MMD'))
const MAD = lazy(() => import('../pages/Donghua/MAD'))
const Space = lazy(() => import('../pages/Space'))
const Donghua = lazy(() => import('../pages/Donghua'))
const Fanju = lazy(() => import('../pages/Fanju'))
const Guochuang = lazy(() => import('../pages/Guochuang'))
const Yinyue = lazy(() => import('../pages/Yinyue'))
const Wudao = lazy(() => import('../pages/Wudao'))
const Youxi = lazy(() => import('../pages/Youxi'))
const VideoDetail = lazy(() => import('../pages/VideoDetail'))
const Search = lazy(() => import('../pages/Search'))
const DonghuaTuijian = lazy(() => import('../pages/Donghua/Tuijian'))

// 延迟加载，运行按需加载 当切换到这个路由后再加载 lazy
export default function RoutesConfig() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Shouye />} />
                <Route path='/shouye' element={<Shouye />} />
                <Route path='/donghua' element={<Donghua />} >
                    <Route path='/donghua/1' element={<DonghuaTuijian />} />
                    <Route path='/donghua/2' element={<MAD />} />
                    <Route path='/donghua/3' element={<MMD />} />
                    {/* /^\/donghua\/[\d]+/ */}
                </Route>
                <Route path='/fanju' element={<Fanju />} >
                    <Route path={'/fanju/:id'} element={<Donghua />} />
                </Route>
                <Route path='/guochuang' element={<Guochuang />} />
                <Route path='/yinyue' element={<Yinyue />} />
                <Route path='/wudao' element={<Wudao />} />
                <Route path='/youxi' element={<Youxi />} />
                <Route path='/space' element={<Space />} />
                <Route path='/search' element={<Search />} >
                    {/* <Route path='/search?keyword=' element={Wudao} /> */}
                </Route>
                <Route path='/video' element={<VideoDetail />} >
                    <Route path={'/video/:id'} element={<VideoDetail />} />
                </Route>
            </Routes>
        </>
    )
}