import "./promociones.css"
import Promo1 from "./assets/promo1.png"
import Promo2 from "./assets/promo2.png"
import Promo3 from "./assets/promo3.png"



function Promociones(){
    return (

        <div>

            <div>
                <p className="subtitulo-home">Promociones Vigentes:</p>

                <div className="contenedor-home">
                    <img className="fotos-promos" src={Promo1}></img>
                    <img className="fotos-promos" src={Promo2}></img>
                    <img className="fotos-promos" src={Promo3}></img>
                </div>          
                
            </div>
            

        </div>

    )
}

export default Promociones;