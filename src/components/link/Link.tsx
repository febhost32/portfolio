import React from "react";

interface LinkProps {
    link: string,
    target: string,
    text: string
}


const Link: React.FC<LinkProps> = ({link, target, text}) => {


    return (
        <a href={link} target={target} rel="noreferrer" style={{fontSize: "12pt"}}>{text}</a>
    )
}


export default Link;