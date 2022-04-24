import React from "react";
import "./MainPage.css";
import Title from "../components/title/Title";
import Contacts from "../components/contacts/Contacts";
import Link from "../components/link/Link";
import Card from "../components/card/Card";

function MainPage() {


        return (
            <div className="page-container">
                <div className="main-section"> 
                    <Contacts />   
                        <div className="title-layer">                 
                            <Title />
                        </div>
                </div>
                <div className="aboutme-section"> 
                    <h1 className="title-text">About Me</h1>
                    <Card />
                </div>
                <div className="portfolio-section"> 
                    <h1 className="title-text">Portfolio coming soon...</h1>
                </div>
            </div>
        )

}

export default MainPage;