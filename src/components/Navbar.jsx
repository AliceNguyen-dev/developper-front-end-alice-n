import React from "react";
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu";

import './Navbar.css'


const Navbar = () => {
    return (

        <div className="display-menu">

            <div className="menuVisible">
                <Link to="/" className="NavItems menu">
                    Accueil
                </Link>
                <Link to="/resume" className="NavItems menu">
                    Résume
                </Link>
                <Link to="/portfolio" className="NavItems menu">
                    Portfolio
                </Link>
                <Link to="/contact" className="NavItems menu">
                    Contact
                </Link>
            </div>
            <div className="burgerVisible">
                <Menu>
                    <Link to="/" className="menu-items">
                        Accueil
                    </Link>
                    <Link to="/resume" className="menu-items">
                        Résume
                    </Link>
                    <Link to="/portfolio" className="menu-items">
                        Portfolio
                    </Link>
                    <Link to="/contact" className="menu-items">
                        Contact
                    </Link>
                </Menu>
            </div>

        </div>

    )
}

export default Navbar