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
import Git from "../assets/Git.png";
import Sybase from "../assets/sybase.png";
import NodeJs from "../assets/nodejs.png";
import MongoDB from "../assets/mongodb.png";
import Azure from "../assets/azure.png";
import Vue from "../assets/Vue.png";
import Nuxt from "../assets/nuxt.png";
import Golang from "../assets/golang.png";
import { Wrapper } from "../components/wrapper/Wrapper";
import { InlineWrapper } from "../components/inlineWrapper/InlineWrapper";
import experiences from "../assets/data/experiences.json";

function MainPage() {
  const experiencesHtml = experiences.map((experience, index) => (
    <Card key={index}>
      <h4>{experience.companyName}</h4>
      <p className="quotes italic fontsize-9">
        {experience.companyDescription}
      </p>
      <InlineWrapper>
        <p className="fontsize-10 flex-grow-1">{experience.companyPosition}</p>{" "}
        <p className="fontsize-10">{experience.workDate}</p>
      </InlineWrapper>
      <hr />
      <ul>
        {experience?.whatYouDo?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <hr />
      {experience.achievements && <h5>Achievements</h5>}
      <ul>
        {experience?.achievements?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <br />
      {experience?.companyUrl && (
        <Link link={experience.companyUrl} target="_blank" text="Visit site" />
      )}
    </Card>
  ));

  return (
    <div className="page-container">
      <div className="main-section">
        <div className="title-layer">
          <Title />
          <Contacts />
        </div>
      </div>
      <div className="aboutme-section">
        <h1 className="title-text">About Me</h1>
        <Card>
          <Wrapper>
            <p className="aboutme">
              I am a Web developer with More than 3 Years of Experience coming
              from a reputable company
              <br /> and now utilizing my skills and knowledge to build a
              product in a Startup. Currently residing in{" "}
              <Link
                link="https://goo.gl/maps/1SBHexztPLaG2rLBA"
                target="_blank"
                text="Jakarta"
              />
              <br />
            </p>
          </Wrapper>
        </Card>
      </div>
      <div className="portfolio-section">
        <h1 className="title-text">Portfolio</h1>
        <div className="portfolio-wrapper">
          <div className="left-pane">
            <Card>
              <img
                src={Febrian}
                alt="Febrian"
                style={{ borderRadius: "50%", maxWidth: "100px" }}
              />
              <h3>Febrian Pratama Putra</h3>
              <hr />
              <p>Address&emsp;: Jakarta Selatan</p>
              <p>
                Phone&emsp;: Check in my{" "}
                <Link
                  link="https://drive.google.com/drive/folders/1lnnraiPF2qRDBla51TqRxnwutfg7w1D8"
                  target="_blank"
                  text="CV"
                />
              </p>
              <p>
                Email&emsp;: feb.pratama32@gmail.com{" "}
                <Link
                  link="mailto: feb.pratama32@gmail.com"
                  target="_blank"
                  text="Mail here"
                />
              </p>
              <p>
                LinkedIn&emsp;:{" "}
                <Link
                  link="https://www.linkedin.com/in/febrian-pratama-putra-a25138147/"
                  target="_blank"
                  text="Visit here!"
                />{" "}
              </p>
              <p>
                Github&emsp;:{" "}
                <Link
                  link="https://github.com/febhost32"
                  target="_blank"
                  text="Visit here!"
                />{" "}
              </p>
              <hr />
              <p style={{ textAlign: "center" }}>
                Check out my{" "}
                <Link
                  link="https://drive.google.com/drive/folders/1lnnraiPF2qRDBla51TqRxnwutfg7w1D8"
                  target="_blank"
                  text="CV here"
                />
                !
              </p>
            </Card>
            <Card>
              <h2 style={{ textAlign: "center" }}>Tech Stack</h2>
              <hr />
              <div
                style={{
                  display: "flex",
                  placeItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  src={Vue}
                  alt="Vue"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Nuxt}
                  alt="Nuxt"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Golang}
                  alt="Golang"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={JavaScript}
                  alt="JavaScript"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Java}
                  alt="Java"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={TypeScript}
                  alt="TypeScript"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={NodeJs}
                  alt="NodeJs"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={MongoDB}
                  alt="MongoDB"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Azure}
                  alt="Azure Cloud"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={React}
                  alt="React"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Redux}
                  alt="Redux"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Angular}
                  alt="Angular"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={AEM}
                  alt="AEM"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={jQuery}
                  alt="jQuery"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Gatsby}
                  alt="Gatsby"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Git}
                  alt="Git"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={HTML}
                  alt="HTML5"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={CSS}
                  alt="CSS3"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Python}
                  alt="Python"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Android}
                  alt="Android"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Express}
                  alt="Express"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={MySQL}
                  alt="MySQL"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
                <img
                  src={Sybase}
                  alt="Sybase"
                  style={{ maxWidth: "100px", margin: "10px" }}
                />
              </div>
            </Card>
          </div>
          <div className="right-pane">{experiencesHtml}</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
