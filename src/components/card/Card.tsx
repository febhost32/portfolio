import React from "react";
import "./Card.css";

interface CardProps {
    children : JSX.Element
}

const Card: React.FC<CardProps> = ({children}) => {

    return (
        <div className="card-container">
            {children}
        </div>
    )
}

export default Card;