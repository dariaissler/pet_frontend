import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { UilAngleLeft } from '@iconscout/react-unicons'


export const BackArrow = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }

    if (location.pathname !== '/cases') {
        return (
            <>
            <a className='col-md-9' onClick={goBack} ><UilAngleLeft color="#662ED3" size="40" /></a>
            </>
        )
    }
}