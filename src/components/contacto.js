import "./contacto.css"


function Contacto(){
    return (
        <div>

            <div>
                
                <p className="subtitulo-home">Nombre:</p>
                <div className="contenedor-home">
                <input className="inputs-contacto" type="text" placeholder="Escribe tu nombre..."></input>
                </div>

                <p className="subtitulo-home">Email:</p>
                <div className="contenedor-home">
                <input className="inputs-contacto" type="text" placeholder="Escribe tu email..."></input>
                </div> 

                <p className="subtitulo-home">Celular:</p>
                <div className="contenedor-home">
                <input className="inputs-contacto" type="text" placeholder="Celular..."></input>
                </div> 

                <p className="subtitulo-home">Mensaje:</p>
                <div className="contenedor-home">
                <input className="inputs-contacto2" type="text" placeholder="Mensaje..."></input>
                </div> 
                <div>
                <input className="boton-enviar"type="submit" value="Enviar"></input>
                </div>
                
            </div>
            

        </div>
    )
}

export default Contacto;