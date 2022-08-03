import React from 'react';

import { Link } from 'react-router-dom'

import Styles from "./notFound.module.css"

export default function Error404(){
    return(
        <div className={Styles.container}>
           <h1>404 NOT FOUND</h1>
           <Link to={"/home"}><button>Back to Home</button></Link>
        </div>
    )
}