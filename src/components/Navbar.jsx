import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";

const Navbar = () => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const handleBurgerMenuToggle = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    const handleMenuItemClick = () => {
        setBurgerMenuOpen(false);
    };

    return (
        <div className="display-menu">
            <div className="menuVisible">
                <Link to="/" className="NavItems menu" onClick={handleMenuItemClick}>
                    Accueil
                </Link>
                <Link to="/resume" className="NavItems menu" onClick={handleMenuItemClick}>
                    Résume
                </Link>
                <Link to="/portfolio" className="NavItems menu" onClick={handleMenuItemClick}>
                    Portfolio
                </Link>
                <Link to="/contact" className="NavItems menu" onClick={handleMenuItemClick}>
                    Contact
                </Link>
            </div>
            <div className="burgerVisible">
                <div className="burger-button" onClick={handleBurgerMenuToggle}>
                    
                </div>
                <Menu isOpen={isBurgerMenuOpen} onClose={handleBurgerMenuToggle}>
                    <Link to="/" className="menu-items" onClick={handleMenuItemClick}>
                        Accueil
                    </Link>
                    <Link to="/resume" className="menu-items" onClick={handleMenuItemClick}>
                        Résume
                    </Link>
                    <Link to="/portfolio" className="menu-items" onClick={handleMenuItemClick}>
                        Portfolio
                    </Link>
                    <Link to="/contact" className="menu-items" onClick={handleMenuItemClick}>
                        Contact
                    </Link>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;