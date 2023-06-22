import React from "react";
import DarkThemeSwitch from "./DarkThemeSwitch";

function Navbar(){
    return(
        <>
        <div className="Navbar_main">
            <div className="Navbar_heading">LOCALE</div>
            <div className="Navbar_link">
                <a id="link1" href="#">Explore</a>
                <a id="link2" href="#">Tourist Places</a>
                <a id="link3" href="#">Cafes</a>
                <a id="link4" href="#">Login</a>
            </div>
            <DarkThemeSwitch/>
        </div>
        </>
    )
}

export default Navbar;