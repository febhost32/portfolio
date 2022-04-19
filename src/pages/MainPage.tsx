import React from "react";
import "./MainPage.css";
import Title from "../components/title/Title";
import Contacts from "../components/contacts/Contacts";

function MainPage() {


        return (
            <div className="page-container">
                <div className="main-section"> 
                    <Contacts />   
                        <div className="title-layer">                 
                            <Title />
                        </div>
                </div>
                <div className="second-section"> 
                    {/* TO BE FILLED */}
                </div>
            </div>
        )

}

export default MainPage;