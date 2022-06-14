import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ErrorPage.module.scss'
import toHome from '../../../assecs/images/404/AVATARZ.png'

const ErrorPage = React.memo(() => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.errorTitle}>
                <p>If you haven't found it yet, keep looking. 404</p>
            </div>
            <div className={styles.errorLink__toHome}>
                <button>
                    <Link to="/" >to home...</Link>
                </button>
            </div>
            <div className={styles.errorImg}>
                <img src={toHome} alt='404' />
            </div>
        </div>
    )
})

export default ErrorPage