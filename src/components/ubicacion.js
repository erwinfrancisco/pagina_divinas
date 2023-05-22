import "./ubicacion.css"

import Mapa from "./assets/ubicacion.png"




function Ubicacion(){
    return (

        <div>

            <div>
                <p className="subtitulo-ubicacion">Ubicación:</p>

                <div className="contenedor-home">
                   
                    <img className="foto-ubicacion" src={Mapa}></img>
                  
                </div>          
                
            </div>
            

        </div>

    )
}

export default Ubicacion;