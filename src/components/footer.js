import React from "react";
import { useNavigate } from "react-router";
import {FaArrowRight} from "react-icons/fa";
import {CgArrowLongRight} from 'react-icons/cg'

const Footer = () => {
    const navigate = useNavigate();
    return (<div className="footerContainer">
        <ul>
            <li>Questions or Comments?</li>
            <li><CgArrowLongRight className="arrow"/></li>
            <li>|</li>
            <li className="footerClick" onClick={((e)=>{
                e.preventDefault()
                navigate("/contactUs")
            })}>Contact Us</li>
            <li>|</li>
            <li>© TRACE DIAGNOSTICS, INC. 2023</li>
        </ul>
    </div>)
}

export default Footer;