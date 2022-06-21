import React from 'react';

import Style from './loading.module.css'

import loading from '../../Images/loading-gif-png-4.gif'

export default function Loading(){
    return(
        <div className={Style.container}>
            <img src={loading} alt="" />
        </div>
    )
}