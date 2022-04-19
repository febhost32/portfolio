import React from "react";
import "./Contacts.css";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Contacts: React.FunctionComponent = () => {
    
    return (
    <div className="contacts-container">
        <div className="contacts-wrapper">
            <a href="mailto:feb.pratama32@gmail.com" target="_blank" rel="noreferrer"><img src={email} alt={"My Email"}/></a>
            <a href="https://www.linkedin.com/in/febrian-pratama-putra-a25138147/" target="_blank" rel="noreferrer"><img src={linkedin} alt={"My Linkedin"}/></a>
            <a href="https://github.com/febhost32" target="_blank" rel="noreferrer"><img src={github} alt={"My GitHub"}/></a>
        </div>
    </div>
    )
}


export default Contacts;