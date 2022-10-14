import React, { memo, useEffect, useRef } from 'react'
import { Tabs } from 'antd-mobile'
import { Button, Dropdown } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import { HeaderMenu } from './style'
import { DropdownWrapper, DrawerWrapper } from './style'
import classnames from 'classnames'
import { Link, useLocation, NavLink, useNavigate } from 'react-router-dom'
import CannelData from '@/config'
import { useState } from 'react'
import ChildCannel from './demo'
import { isCannelBarExisted } from '@/utils'


export function CannelBar() {
    const { pathname } = useLocation();
    const ref = useRef(null)
    const [items, setItems] = useState([])
    // const [cannelNames, SetCannelNames] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if (CannelData.find(ele => ele.cannelname == pathname) && pathname !== '/shouye') {
            if (/^\/\w+$/.test(pathname) || /^\/\w+\/$/.test(pathname)) {
                let fenqu = pathname.match(/^\/[^\/]*/)
                navigate(`${fenqu}/1`)
            }
        }
        const CannelItems = () => {
            let fenqu = pathname.match(/^\/[^\/]*/)
            return (
                <Tabs activeKey={fenqu} >
                    {
                        CannelData.map(
                            (item) => {
                                return (
                                    <Tabs.Tab
                                        title={
                                            <NavLink to={item.cannelname} className={classnames({ active: pathname == item.cannelname })}>
                                                <span>{item.ctitle}</span>
                                            </NavLink>
                                        }
                                        key={item.cannelname}
                                    >
                                    </Tabs.Tab>
                                )
                            }
                        )
                    }
                </Tabs>
            )
        }
        setItems(CannelItems)
    }, [pathname])

    if (isCannelBarExisted(pathname)) return
    return (
        <>
            <HeaderMenu>
                {items}
                <DropdownWrapper ActiveKey={pathname}>
                    <Dropdown arrow={<DownOutline />} ref={ref}>
                        <Dropdown.Item key='sorter' title=''>
                            <DrawerWrapper>
                                <div>
                                    {
                                        CannelData.map(
                                            (item) => {
                                                return (
                                                    <NavLink 
                                                        to={item.cannelname}
                                                        className={classnames({ active: pathname == item.cannelname })}
                                                        onClick={() => {
                                                            ref.current?.close()
                                                        }}
                                                    >
                                                        <span>{item.ctitle}</span>
                                                    </NavLink>
                                                )

                                            }
                                        )
                                    }
                                </div>
                                <i className="iconfont general_pullup_s" onClick={() => {
                                    ref.current?.close()
                                }}></i>
                            </DrawerWrapper>
                        </Dropdown.Item>
                    </Dropdown>
                </DropdownWrapper>
            </HeaderMenu>
            <ChildCannel />
        </>
    )
}

export default memo(CannelBar)