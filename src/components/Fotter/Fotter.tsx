import { NavLink } from 'react-router-dom'

import styles from './Fotter.module.css'

import logo from '../../assecs/images/logo.png'

import location from '../../assecs/images/Fotter/location.png'
import phone from '../../assecs/images/Fotter/phone.png'
import mail from '../../assecs/images/Fotter/mail.png'

import mastercard from '../../assecs/images/Fotter/mastercard.png'
import visa from '../../assecs/images/Fotter/visa.png'
import americanExpress from '../../assecs/images/Fotter/american-express.png'
import paypal from '../../assecs/images/Fotter/paypal.png'
import apple from '../../assecs/images/Fotter/pay-apple.png'
import google from '../../assecs/images/Fotter/pay-google.png'

import instagram from '../../assecs/images/Fotter/icons-instagram.svg'
import facebook from '../../assecs/images/Fotter/icons-facebook.svg'
import pinterest from '../../assecs/images/Fotter/icons-pinterest.svg'
import twitter from '../../assecs/images/Fotter/icons-twitter.svg'

import us from '../../assecs/images/Fotter/us.png'

const Fotter = () => {
    return (
        <div className={styles.Fotter}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logo}>
                    <img src={logo} alt="" />
                    <h4>EGOR MAKAROV</h4>
                </NavLink>
                <div className={styles.info}>
                    <div className={styles.contacts}>
                        <h4>Contacts</h4>
                        <div>
                            <a href="https://www.google.by/maps/place/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.8847608,27.4532846,11z/data=!3m1!4b1!4m5!3m4!1s0x46dbcfd35b1e6ad3:0xb61b853ddb570d9!8m2!3d53.9006011!4d27.558972">
                                <img src={location} alt="" /></a>
                            <span>Minsk, 220000</span>
                        </div>
                        <div>
                            <a href="tel:+375-29-0000000"><img src={phone} alt="" /></a>
                            <span>80(29)0000000</span>
                        </div>
                        <div>
                            <a href="mailto:support@em.by"><img src={mail} alt="" /></a>
                            <span>support@em.by</span>
                        </div>
                    </div>
                    <div className={styles.pay}>
                        <h4>Payment Information</h4>
                        <div>
                            <img src={mastercard} alt="" />
                            <img src={visa} alt="" />
                            <img src={americanExpress} alt="" />
                            <img src={paypal} alt="" />
                        </div>
                        <p>
                            You can pay for purchases in cash upon receipt, or choose another payment method.
                        </p>
                        <div>
                            <img src={apple} alt="" />
                            <img src={google} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.social}>
                    <a href="https://www.instagram.com/"><img alt="" src={instagram} /></a>
                    <a href="https://twitter.com/"><img alt="" src={twitter} /></a>
                    <a href="https://www.pinterest.com/"><img alt="" src={pinterest} /></a>
                    <a href="https://www.facebook.com/"><img alt="" src={facebook} /></a>
                </div>
                <div className={styles.bottom}>
                    <span>© EM 2021.</span>
                    <img src={us} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Fotter