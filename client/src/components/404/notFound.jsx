import React from 'react';

import Styles from "./notFound.module.css"

export default function Error404(){
    return(
        <div className={Styles.container}>
           <h1>404 NOT FOUND</h1>
        </div>
    )
}