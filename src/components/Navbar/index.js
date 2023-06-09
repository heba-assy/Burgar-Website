import React from 'react'
import { Bars, Nav, NavLink, NavIcon } from './NavbarElements';

function Navbar({toggle}) {
    return (
            <Nav>
                <NavLink to="/">Burger</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
    )
}

export default Navbar;