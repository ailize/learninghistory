import React, { useEffect, useState } from "react";
import { Wrapper } from './style'
import { Outlet } from 'react-router';

const Donghua = () => {

    return (
        <Wrapper>
            <Outlet />
        </Wrapper >
    )
}

export default Donghua
