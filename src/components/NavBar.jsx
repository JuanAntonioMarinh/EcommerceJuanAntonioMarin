import React from "react"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return <div>
    <h1>Sueep: Professional painting company</h1>
        <ul>
            <li>Bedrooms</li>
            <li>Bathrooms</li>
            <li>Kitchen</li>
            <li>Social areas</li>
            <li>Others</li>
        </ul>
        <CartWidget />
    </div>;
};

export default NavBar;