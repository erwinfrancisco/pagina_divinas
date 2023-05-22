import MenuItem from "./menu-item";
import "./menu.css"

function Menu(){
    return (
        <nav>
            <ul className="menu">
            <MenuItem 
                text="Home"
                link="/"
            />

            <MenuItem 
                text="Promociones"
                link="/promociones"
            />

            <MenuItem 
                text="Contacto"
                link="contacto"
            />

            <MenuItem 
                text="Ubicación"
                link="ubicacion"
            />
            </ul>
        </nav>
    )
}

export default Menu;