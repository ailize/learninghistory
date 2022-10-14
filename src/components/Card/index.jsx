import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { CardWrapper } from './style'
import { NumberFormat } from '@/utils'
import classnames from 'classnames'
import protoTypes, { func } from 'prop-types'
import LazyLoad from 'react-lazyload'

export function Card({video}){
    const {bvid,pic,title,play,video_review} = video;
    return(
        <>
        {
            <CardWrapper>
                <Link
                to={`/video/${bvid}`}
                className='v-card'>
                    <div className="card">
                        <picture>
                            <LazyLoad
                                placeholder={<img
                                    className='m-bfs-pic pic'
                                />}>
  <img src={pic}
                                        // 如何实现 onError 事件触发,img 添加 notfond 属性
                                        className={classnames("m-bfs-pic pic", { notfond: !pic })} />
                            </LazyLoad>
                        </picture>
                        <div className="count">
                                <span>
                                    <i className="iconfont icon_shipin_bofangshu"></i>
                                    {NumberFormat(play)}
                                </span>
                                <span>
                                    <i className="iconfont icon_shipin_danmushu"></i>
                                    {NumberFormat(video_review)}
                                </span>
                            </div>
                    </div>
                    <p className="title">{title}</p>
                </Link>
            </CardWrapper>

        }
        </>
    )
}
Card.protoTypes = {
    video: protoTypes.array.isRequired
}

export default memo(Card)