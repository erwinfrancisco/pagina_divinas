import "./home.css"
import LogoDivinas from "./assets/DIVINAS-CHIC-LOGO.png"
import LogoFB from "./assets/facebook.png"
import LogoInstagram from "./assets/instagram.png"
import LogoWP from "./assets/whatsapp.png"



function Home(){
    return (

        <div>

            <div>
                <img className="logodivinas" src={LogoDivinas}></img>
                <p className="subtitulo-home">Somos especialistas en diseño de cejas, maquillaje y peinados</p>
                <div className="contenedor-home">
                    <p className="parrafos">Contamos con servicios de Pedicure & Manicure SPA y aplicación de shellac con una gran variedad de diseños originales y personalizados.</p>
                </div>
                <div className="contenedor-home">
                    <img className="iconos" src={LogoFB}></img>
                    <img className="iconos" src={LogoInstagram}></img>
                    <img className="iconos" src={LogoWP}></img>
                </div>          
                
            </div>
            

        </div>

    )
}

export default Home;