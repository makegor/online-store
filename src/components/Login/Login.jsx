import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import style from '../common/FormControls/FormControls.module.css';
import styles from './Login.module.css';

const maxLength20 = maxLengthCreator(20);

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email:"} name={"email"} component={Input}
                validate={[required, maxLength20]} />
        </div>

        <div>
            <Field placeholder={"Password:"} name={"password"} component={Input} type={"password"}
                validate={[required, maxLength20]} />
        </div>

        {props.error && <div className={style.formSummaryError}>{props.error}</div>}

        <div>
            <button className={styles.login__btn}>login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm)

let Login = (props) => {
    window.scrollTo(0, 0);
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/buy/bag" />
    }

    else {
        return <div className={styles.container}>
                <h1>SIGN IN</h1>
                <LoginReduxForm onSubmit={onSubmit} />
        </div>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);