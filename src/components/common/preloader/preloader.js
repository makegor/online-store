import preloader from "../../../assecs/images/preloader/preloader.svg"
import preloader_basket from "../../../assecs/images/preloader/preloader_basket.svg"
import preloader_login from "../../../assecs/images/preloader/preloader_login.svg"

let Preloader = (props) => {
return <div> 
        <img alt="" src={preloader} />
    </div>
}

export let PreloaderBasket  = (props) => {
return <div> 
        <img alt="" src={preloader_basket} />
    </div>
}

export let PreloaderLogin  = (props) => {
return <div> 
        <img alt="" src={preloader_login} />
    </div>
}

export default Preloader;