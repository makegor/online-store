import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { useTypedSelector } from '../hooks/useTypeSelector'

import styles from './Login.module.scss'
import { PreloaderLogin } from '../common/preloader/preloader'

interface LoginSingIn{
    email: string
    password: string
    confirmPassword?: string
}

const Login = () => {

    const {isAuth} = useTypedSelector(state => state.auth)
    const {isFetching} = useTypedSelector(state => state.auth)

    const dispatch = useDispatch()

    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').email('Email must be a valid email').required('Required field'),
        password: yup.string().typeError('Должно быть строкой').max(25, 'No more than 25 characters').min(5, 'More than 5 characters').required('Required field'),
        confirmPassword: yup.string().typeError('Должно быть строкой').oneOf([yup.ref('password')], 'Passwords do not match').required('Required field')
    })

    if (isAuth) {
        return <Navigate to="/buy/bag" />
    }

    else {
        return (
            <div className={styles.container}>
                <h1>SING IN</h1>
                {isFetching
                    ? <PreloaderLogin />
                    : <Formik
                        initialValues={{ email: '', password: '', confirmPassword: ''}}
                        onSubmit={(values: LoginSingIn) => { dispatch(login(values.email, values.password)) }}
                        validateOnBlur
                        validationSchema={validationsSchema}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
                            <Form>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={"Email:"}
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={styles.input + " " + (errors.email && touched.email ? styles.error : "")}
                                    />
                                    {touched.email && errors.email && <div className={styles.message__error}>{errors.email}</div>}
                                </div>
                                <div>
                                    {(!errors.email && touched.email)
                                        ? <div>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder={"Password:"}
                                                value={values.password}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={styles.input + " " + (errors.password && touched.password ? styles.error : "")}
                                            />
                                            {touched.password && errors.password && <div className={styles.message__error}>{errors.password}</div>}
                                        </div>
                                        : <div></div>

                                    }
                                </div>
                                <div>
                                    {(!errors.email && touched.email)
                                        ? <div>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder={"Confirm Password:"}
                                                value={values.confirmPassword}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={styles.input + " " + (errors.confirmPassword && touched.confirmPassword ? styles.error : "")}
                                            />
                                            {touched.confirmPassword && errors.confirmPassword && <div className={styles.message__error}>{errors.confirmPassword}</div>}
                                        </div>
                                        : <div></div>
                                    }
                                </div>
                                <button className={styles.login__btn} type="submit" disabled={!isValid && !dirty}>login</button>
                            </Form>
                        )}
                    </Formik>
                }
            </div >
        )
    }
}

export default Login