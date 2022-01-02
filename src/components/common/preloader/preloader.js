import preloader from "../../../assecs/images/preloader.svg"
import preloader_basket from "../../../assecs/images/preloader_basket.svg"

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

export default Preloader;