import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ErrorPage.module.css'
import toHome from '../../../assecs/images/404/404.jpg'

const ErrorPage = React.memo(() => {
    return (
        <div className={styles.errorPage}>
            <p>The page you're looking for can't be found.</p>

            <img src={toHome} alt='404'/>

            <Link to="/" >to home...</Link>
        </div>
    )
})

export default ErrorPage