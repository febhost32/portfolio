import React from "react";
import "./Card.css";


const Card: React.FC = () => {

    return (
        <div className="card-container">
            <div className="card-title-section">
             Test title
            </div>
            <hr />
            <div className="card-body-section">
                test body
            </div>
        </div>
    )
}

export default Card;