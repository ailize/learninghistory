import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import { HeaderNavBar } from './style'
// import {CannelBar} from '../CannelBar'
import CannelBar from '../CannelBar'
import { Link, useLocation } from 'react-router-dom'
import download from '../../assets/images/common/navOpenApp.png'
import face from '../../assets/images/common/face.png'


export function Header(props) {
    const { pathname } = useLocation();
    if (pathname == '/search') {
        return;
    }

    return (
        <HeaderWrapper>
     <HeaderNavBar className='m-navbar'>
        <Link to="/shouye" className="logo"><i className="iconfont Navbar_logo"></i></Link>
        <div className="right">
            <Link to="/search" className="search">
                <i className="iconfont ic_search_tab">                
                </i>
            </Link>
            <Link to="/space" className="face">
                <img className="bgf-img" src={face}/>
            </Link>
            <div className="launch-app-btn m-nav-openapp">
                <img src={download} className="nav-open-app-img"/>
            </div>
        </div>
        </HeaderNavBar> 
        <CannelBar/>
        </HeaderWrapper>
    )
}

export default memo(Header)