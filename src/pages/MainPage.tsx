import "./MainPage.css";
import Title from "../components/title/Title";
import Contacts from "../components/contacts/Contacts";
import Card from "../components/card/Card";
import Link from "../components/link/Link";
import Febrian from "../assets/febrian.jpeg";
import AEM from "../assets/AEM.png";
import Android from "../assets/android.jpg";
import Express from "../assets/express.png";
import Java from "../assets/java.png";
import JavaScript from "../assets/javascript.png";
import jQuery from "../assets/jquery.png";
import Python from "../assets/python.png";
import React from "../assets/React.png";
import Redux from "../assets/redux.png";
import TypeScript from "../assets/TypeScript.png";
import CSS from "../assets/CSS3.png";
import HTML from "../assets/HTML5.png";
import MySQL from "../assets/MySQL.png";
import Angular from "../assets/Angular.png";
import Gatsby from "../assets/gatsby.png";
import Git from "../assets/Git.png"
import Sybase from "../assets/sybase.png";
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
                        Hello, My name is Febrian, I am a Web developer with 2+ Years Experience. Currently residing in <Link link="https://goo.gl/maps/5xyUxEA3sMvGq1bV6" target="_blank" text="Batam" /> 
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
                            <hr />
                            <p style={{textAlign: "center"}}>Check out my <Link link="https://drive.google.com/file/d/1-6BvASwCF94LgXVOLnjv5sHjZDuc2RHb/view?usp=sharing" target="_blank" text="CV here"/>!</p>
                        </Card>
                        <Card>
                            <h2 style={{textAlign: "center"}}>Tech Stack</h2>
                            <hr />
                            <div style={{display: "flex", placeItems:"center", justifyContent: "center", flexWrap: "wrap"}}>
                            <img src={JavaScript} alt="JavaScript" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={TypeScript} alt="TypeScript" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={React} alt="React" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Redux} alt="Redux" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Angular} alt="Angular" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={AEM} alt="AEM" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={jQuery} alt="jQuery" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Gatsby} alt="Gatsby" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Git} alt="Git" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={HTML} alt="HTML5" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={CSS} alt="CSS3" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Java} alt="Java" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Python} alt="Python" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Android} alt="Android" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Express} alt="Express" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={MySQL} alt="MySQL" style={{maxWidth:"100px", margin:"10px"}}/>
                            <img src={Sybase} alt="Sybase" style={{maxWidth:"100px", margin:"10px"}}/>
                            </div>
                        </Card>
                        </div>
                        <div className="right-pane">
                        <Card>
                            <h4>PT.Pertamina - Hukumonline.com</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">Freelance Web Developer</p> <p className="italic fontsize-10">Jun 2022 - Aug 2022</p></InlineWrapper>
                            <hr />
                            <p>Pertamina, Collaborating with Hukumonline.com to create an Internal website for Databases of Law Firms and Lawyers</p>
                            <br />
                            <Link link="#" target="_self" text="Internal Website, Highly Confidential" />
                            <hr />
                            <h5>Achievements</h5>
                            <ul>
                                <li>Creating Common Components for the Website</li>
                                <li>Giving Design feedback for better UX</li>
                            </ul>
                        </Card>
                        <Card>
                            <h4>Kimberly-Clark Softex Indonesia</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">Freelance Web Developer</p> <p className="italic fontsize-10">Sep 2021 - Jun 2022</p></InlineWrapper>
                            <hr />
                            <p>Freelance Web Development work where i do design, plan and Implement the UI based from proposed design along with all the features required to make such feature</p>
                            <br />
                            <Link link="https://sweetycare.com/gts/main/home" target="_blank" text="Visit site" />
                            <hr />
                            <h5>Achievements</h5>
                            <ul>
                                <li>Initiated the Gatsby Project for first Commit</li>
                                <li>Built an Authentication &#40;login&#41; System using Redux</li>
                                <li>Built the initial version of SSO &#40;Third Party authentication using Firebase for Facebook and Google logins&#41;</li>
                                <li>Added Routing Prefix paths for better Application separation in one server</li>
                                <li>Learned vanilla CSS for some advanced usage</li>
                                <li>Built the initial footer of the web page</li>
                                <li>Built Article Lists feature on the website</li>
                                <li>Implemented Front-end side Pagination using React-paginate</li>
                                <li>Built a sitemap for Search Engine Optimization &#40;SEO&#41;</li>
                                <li>Built a User Discussion feature &#40;Topics and Comments like Disqus&#41;</li>
                                <li>Built Mini Apps related to Mothers and Childs</li>
                                <li>Implemented 3D Object loader and viewer using React-three-fiber</li>
                                <li>Built a View-counter System for Discussion</li>
                                <li>Built React Custom Hooks for Element detection in Browser's Viewport</li>
                                <li>Built Social-media Sharing common components</li>
                                <li>Built Tracking feature for Page and Feature Clicks</li>
                            </ul>
                        </Card>
                        <Card>
                            <h4>AIA Singapore</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">Full-Stack Web Developer</p> <p className="italic fontsize-10">July 2020 - July 2022</p></InlineWrapper>
                            <hr />
                            <ul>
                                <li>Maintaining existing code to be able to change with latest User Requirements</li>
                                <li>Plan, Design and Implement new feature to the software as per user Request</li>
                                <li>Involved in few Projects :
                                    <ul>
                                        <li>MyAIA BAU</li>
                                        <li>MyAIA Phase4</li>
                                        <li>MyAIA Rewards</li>
                                    </ul>
                                </li>
                                <li>As a Scrum Master, i also :
                                    <ul>
                                        <li>Helping team to Remove Blockers and refocus team goals</li>
                                        <li>Bridge between developers when help is needed</li>
                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <Link link="https://myaia.aia.com.sg/en/my-aia/login.html" target="_blank" text="Visit site" />
                            <hr />
                            <h5>Achievements</h5>
                            <ul>
                                <li>Started as a Backend Developer &#40;Java&#41;</li>
                                <li>Learned to maintain and update Existing Java Spring API for the Backend</li>
                                <li>Learned how to debug a program</li>
                                <li>Learned how to use Git Source Control and team's Git flow in general &#40;Using UI or CLI&#41;</li>
                                <li>Learned to use Adobe Experience Manager &#40;Basically become a Front-end Developer&#41;</li>
                                <li>Learned whole Deployment Process in Front End with AEM technology</li>
                                <li>Learned Project Structure &#40;AEM&#41; of MyAIA</li>
                                <li>Learned how to create a new Page in Mypage Admin</li>
                                <li>Learned how to create new Sidebar Menu</li>
                                <li>Implemented Form for Custom Banner CRUD</li>
                                <li>Implemented search feature for mypage admin</li>
                                <li>Implemented Pagination Feature</li>
                                <li>Implemented HTTP Resource Service</li>
                                <li>Implemented custom Download Function based from ArrayBuffer Response</li>
                                <li>Did a sharing sessions about Software Engineering from Google</li>
                                <li>Become the Front-end Lead for MyAIA-Healthcare Integration Project</li>
                            </ul>
                        </Card>
                        <Card>
                            <h4>Sidoarjo Government</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">IT Auditor</p> <p className="italic fontsize-10">Sep 2018 - Nov 2018</p></InlineWrapper>
                            <hr />
                            <ul>
                                <li>Collecting evidence require for IT Auditing Assessment</li>
                                <li>Communicate with user regarding said evidence for more information</li>
                                <li>Assessing collected evidence according to Government Issued Standard &#40;SPBE&#41;</li>
                            </ul>
                            <br />
                            <Link link="https://goo.gl/maps/4LSQ9zPr7eVMGHeY6" target="_blank" text="Check on Google maps" />
                        </Card>
                        <Card>
                            <h4>PT. Eastern Pearl Flour Mills</h4>
                            <InlineWrapper><p className="italic fontsize-10 flex-grow-1">IT Support</p> <p className="italic fontsize-10">June 2018 - Aug 2018</p></InlineWrapper>
                            <hr />
                            <ul>
                                <li>Supporting daily IT Activities with IT Support staffs</li>
                                <li>Maintaining and monitoring network infrastructure within company</li>
                            </ul>
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