import "./MainPage.css";
import Title from "../components/title/Title";
import Contacts from "../components/contacts/Contacts";
import Card from "../components/card/Card";
import Link from "../components/link/Link";
import Febrian from "../assets/febrian.jpeg";
import { Wrapper } from "../components/wrapper/Wrapper";
import { InlineWrapper } from "../components/inlineWrapper/InlineWrapper";

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
                        <Wrapper>
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
                        </Wrapper>
                    </Card>
                </div>
                <div className="portfolio-section"> 
                    <h1 className="title-text">Portfolio</h1>
                    <div className="portfolio-wrapper">
                        <div className="left-pane">
                        <Card>
                            <img src={Febrian} alt="Febrian" style={{borderRadius: "50%", maxWidth:"100px"}}/>
                            <h3>Febrian Pratama Putra</h3>
                            <hr />
                            <p>Address&emsp;: Sumbawa Besar, West Nusa Tenggara</p>
                            <p>Phone&emsp;: Check in my <Link link="https://drive.google.com/file/d/1-6BvASwCF94LgXVOLnjv5sHjZDuc2RHb/view?usp=sharing" target="_blank" text="CV"/></p>
                            <p>Email&emsp;: feb.pratama32@gmail.com <Link link="mailto: feb.pratama32@gmail.com" target="_blank" text="Mail here"/></p>
                            <p>LinkedIn&emsp;: <Link link="https://www.linkedin.com/in/febrian-pratama-putra-a25138147/" target="_blank" text="Visit here!"/> </p>
                            <p>Github&emsp;: <Link link="https://github.com/febhost32" target="_blank" text="Visit here!"/> </p>
                        </Card>
                        </div>
                        <div className="right-pane">
                        <Card>
                            <h4>Kimberly-Clark Softex Indonesia</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">Freelance Web Developer</p> <p className="italic fontsize-10">Sep 2021 - Mar 2022</p></InlineWrapper>
                            <hr />
                            Freelance Web Development work where i do design, plan and Implement the UI based from proposed design along with all the features required to make such feature
                            <br />
                            <Link link="https://sweetycare.com/gts/main/home" target="_blank" text="Visit site" />
                        </Card>
                        <Card>
                            <h4>AIA Singapore</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">Web Developer</p> <p className="italic fontsize-10">July 2020 - July 2022</p></InlineWrapper>
                            <hr />

                            <br />
                            <Link link="https://myaia.aia.com.sg/en/my-aia/login.html" target="_blank" text="Visit site" />
                        </Card>
                        <Card>
                            <h4>Sidoarjo Government</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">IT Auditor</p> <p className="italic fontsize-10">Sep 2018 - Nov 2018</p></InlineWrapper>
                            <hr />

                            <br />
                            <Link link="https://goo.gl/maps/4LSQ9zPr7eVMGHeY6" target="_blank" text="Check on Google maps" />
                        </Card>
                        <Card>
                            <h4>PT. Eastern Pearl Flour Mills</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">IT Support</p> <p className="italic fontsize-10">June 2018 - Aug 2018</p></InlineWrapper>
                            <hr />

                            <br />
                            <Link link="http://interflour.com.ph/id/our-business/flour-milling/pt-eastern-pearl-flour-mills" target="_blank" text="Visit site" />
                        </Card>
                        </div>
                    </div> 
                </div>
            </div>
        )

}

export default MainPage;