import React from "react";
import { useNavigate } from "react-router";

const Footer = () => {
    const navigate = useNavigate();
    return (<div className="footerContainer">
        <ul>
            <li onClick={((e)=>{
                e.preventDefault()
                navigate("/environmentalDiagnostics")
            })}>Contact Us</li>
            <li>© TRACE DIAGNOSTICS, INC. 2023</li>
        </ul>
    </div>)
}

export default Footer;