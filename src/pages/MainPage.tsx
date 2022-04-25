import "./MainPage.css";
import Title from "../components/title/Title";
import Contacts from "../components/contacts/Contacts";
import Card from "../components/card/Card";
import Link from "../components/link/Link";
import Febrian from "../assets/febrian.jpeg";

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
                    <Card>
                        <div style={{maxWidth: "600px", textAlign:"justify"}}>
                        <p className="aboutme">
                        Hello, My name is Febrian, I am a Web developer with 2 Years Experience. Currently residing in <Link link="https://goo.gl/maps/23bWT56BXF9K6qXBA" target="_blank" text="Sumbawa Besar, NTB." /> 
                        <br />
                        <br />
                        I have a Broad knowledge in front end development using technologies like Vanilla JavaScript, AEM, jQuery, Angular, React, Gatsby.
                        <br />
                        With a little bit experience in backend using Java Spring.
                        <br />
                        <br />
                        Aside from that, thanks to smart and kind teammates at my first company i have been exposed to a number of Good Engineering Practices.
                        <br />
                        Such as Clean, Reusable Code.
                        <br />
                        Sharing Sessions.
                        <br />
                        Working as part of a Team.
                        <br />
                        Growth Mindset, etc.
                        <br />
                        I also have experience as a scrum master.
                        </p>
                        </div>
                    </Card>
                </div>
                <div className="portfolio-section"> 
                    <h1 className="title-text">Portfolio</h1>
                    <div className="portfolio-wrapper">
                        <div className="left-pane">
                        <Card>
                        <div style={{maxWidth: "600px", textAlign:"justify"}}>
                            <img src={Febrian} alt="Febrian" style={{borderRadius: "50%", maxWidth:"100px"}}/>
                            <h3>Febrian Pratama Putra</h3>
                            <hr />
                        </div>
                        </Card>
                        </div>
                        <div className="right-pane">
                        <Card>
                        <div style={{maxWidth: "600px", textAlign:"justify"}}>
                            <h5>Kimberly-Clark Softex Indonesia</h5>
                            <hr />
                            <Link link="https://sweetycare.com/gts/main/home" target="_blank" text="Visit site" />
                        </div>
                        </Card>
                        <Card>
                        <div style={{maxWidth: "600px", textAlign:"justify"}}>
                            <h5>AIA Singapore</h5> 
                            <hr />
                            <Link link="https://myaia.aia.com.sg/en/my-aia/login.html" target="_blank" text="Visit site" />
                        </div>
                        </Card>
                        <Card>
                        <div style={{maxWidth: "600px", textAlign:"justify"}}>
                            <h5>Sidoarjo Government</h5>
                            <hr />
                            <Link link="https://goo.gl/maps/4LSQ9zPr7eVMGHeY6" target="_blank" text="Check on Google maps" />
                            
                        </div>
                        </Card>
                        <Card>
                        <div style={{maxWidth: "600px", textAlign:"justify"}}>
                            <h5>PT. Eastern Pearl Flour Mills</h5>
                            <hr />
                            <Link link="http://interflour.com.ph/id/our-business/flour-milling/pt-eastern-pearl-flour-mills" target="_blank" text="Visit site" />
                            
                        </div>
                        </Card>
                        </div>
                    </div> 
                </div>
            </div>
        )

}

export default MainPage;