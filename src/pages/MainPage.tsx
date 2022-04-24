import "./MainPage.css";
import Title from "../components/title/Title";
import Contacts from "../components/contacts/Contacts";
import Card from "../components/card/Card";
import Link from "../components/link/Link";

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
                    <h1 className="title-text">Portfolio coming soon...</h1>
                </div>
            </div>
        )

}

export default MainPage;