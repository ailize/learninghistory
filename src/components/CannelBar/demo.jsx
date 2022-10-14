import React, { memo, useEffect, useState } from 'react'
import { HeaderMenu } from './style'
import { Link, useLocation, NavLink, useNavigate, useParams } from 'react-router-dom'
import CannelData from '@/config'
import { isPathPartlyExisted } from '@/utils'
import { Tabs } from 'antd-mobile'
import classnames from 'classnames'
export function ChildCannel() {
    const { pathname } = useLocation();
    const [items, setItems] = useState([])

    // [^\/]* 除 斜杠外内容匹配一个或多个

    useEffect(() => {
        const CannelItems = () => {
            const res = CannelData.filter(
                ({ children }) =>
                    children.length > 0
            )
            console.log(pathname);
            const items = res.filter(
                ({ cannelname }) =>
                    pathname.includes(cannelname)
            )

            return (
                // 先设置默认标签，再更新pathname数据。导致pathname不能控制这边的默认标签bug！！！
                // ↑ ，已解决
                items.map((i) => {
                    return (
                        i.children.map((t) => {
                            return (
                                <Tabs.Tab title={
                                    <NavLink to={t.cannelname}
                                        className={classnames({
                                            active: pathname == t.cannelname || pathname.includes(t.cannelnames)
                                        })}>
                                        <span>{t.ctitle}</span>
                                    </NavLink>
                                }
                                    key={t.cannelname}>
                                </Tabs.Tab>
                            )
                        }
                        )
                    )
                }
                )
            )
        }
        setItems(CannelItems)

    }, [pathname])

    if (isPathPartlyExisted(pathname)) return

    return (
        <HeaderMenu>
            <Tabs activeKey={pathname}>
                {items}
            </Tabs>
        </HeaderMenu>
    )
}

export default memo(ChildCannel)