import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import './Resume.css'

import Icon7 from "../assets/ic07.png";
import Icon8 from "../assets/ic08.png";

function Resume() {
    const mainDiv = {
        width: "240px",
        margin: "50px auto"
    };
    return (
        <div className="resume-main bg-header">
            {/* <div className="title-flex">
                <h2 className='title-page titleOne'><img src={Icon7} alt="" className="ic-resume" /> Formations</h2>
                <h2 className='title-page titleTwo'><img src={Icon8} alt="" className="ic-resume" /> Expériences</h2>
            </div> */}

            <div className="secteurs">

                <div className="sect1">
                    <div className="title-flex">
                        <h2 className='title-page titleOne'><img src={Icon7} alt="" className="ic-resume" /> Formations</h2>
                    </div>
                    <div className="blocFlex">
                        <p className="sub-title">Développeur Full Stack - Cloud Campus</p>
                        <p className="text-resu">2 ans</p>
                    </div>
                    <div className="blocFlex">
                        <p className="sub-title">Développeur Web et Web Mobile - Social Builder</p>
                        <p className="text-resu">3 mois et 1 mois de stage</p>
                    </div>
                    <div className="blocFlex">
                        <p className="sub-title">Bootcamp Get Inco Tech Academy</p>
                        <p className="text-resu">1 mois - Découverte des différents métiers dans le Digital et du Numérique.</p>
                    </div>

                </div>

                <div className="sect2">
                    <div className="title-flex">
                        <h2 className='title-page titleTwo'><img src={Icon8} alt="" className="ic-resume" /> Expériences</h2>
                    </div>
                    <div className="blocFlex">
                        <p className="sub-title">Cashback</p>
                        <p className="text-resu">3 mois - Développeur Front-End </p>
                    </div>
                    <div className="blocFlex">
                        <p className="sub-title">BeeMyFlex</p>
                        <p className="text-resu">1 an - Développeur Front-End en Alternance</p>
                    </div>
                    <div className="blocFlex">
                        <p className="sub-title">TakeMyWebSite - Agence Web</p>
                        <p className="text-resu">1 an - Développeur Full Stack en Alternance</p>
                    </div>
                    <div className="blocFlex">
                        <p className="sub-title">Escapde Française - Agence de Tourisme</p>
                        <p className="text-resu">1 mois - Développeur Web et Web Mobile ( stage )</p>
                    </div>
                </div>


            </div>


            <div className="secteurs">

                <div className="azol">
                    <div className="title-flex">
                        <h2 className='title-page titleOne'>Skills</h2>
                    </div>

                    <div style={mainDiv}>

                        <div className="tabItem">
                            <p className="sbt-sk">HTML5 / CSS3</p>
                            <ProgressBar className="bgItem1" bgColor="#F5B971" completed={100} animateOnRender={false} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">PHP / Symfony</p>
                            <ProgressBar className="bgItem2" completed={80} bgColor="#F5B971" isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Wordpress / SEO</p>
                            <ProgressBar className="bgItem3" completed={90} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Angular</p>
                            <ProgressBar className="bgItem4" completed={30} bgColor="#F5B971" isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Javascript / VueJs3 / ReactJs / Typescript</p>
                            <ProgressBar className="bgItem5" bgColor="#F5B971" completed={90} animateOnRender={true} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Bootstrap</p>
                            <ProgressBar className="bgItem5" completed={80} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>


                    </div>


                </div>

                <div className="yopi">
                    <div className="title-flex">
                        <h2 className='title-page titleTwo'>Compétences</h2>
                    </div>
                    <div style={mainDiv}>

                        <div className="tabItem">
                            <p className="sbt-sk">MySQL</p>
                            <ProgressBar className="bgItem5" completed={80} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">MongoDB</p>
                            <ProgressBar className="bgItem5" completed={50} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Postman</p>
                            <ProgressBar className="bgItem5" completed={40} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Figma</p>
                            <ProgressBar className="bgItem5" completed={100} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Trello</p>
                            <ProgressBar className="bgItem5" completed={80} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>

                        <div className="tabItem">
                            <p className="sbt-sk">Github</p>
                            <ProgressBar className="bgItem5" completed={90.5} bgColor="#F5B971" animateOnRender={true} isLabelVisible={false} />
                        </div>



                    </div>
                </div>

                <div className="lopa">
                    <div className="competences">
                        <div className="ticket"><p className="quat">Google Doc</p></div>
                        <div className="ticket"><p className="quat">Azure Devops</p></div>
                        <div className="ticket"><p className="quat">Word</p></div>
                        <div className="ticket"><p className="quat">Digital Design</p></div>
                        <div className="ticket"><p className="quat">Social Media</p></div>
                        <div className="ticket"><p className="quat">Flexible</p></div>
                        <div className="ticket"><p className="quat">Teams</p></div>
                        <div className="ticket"><p className="quat">Github</p></div>
                        <div className="ticket"><p className="quat">Veille Informatique</p></div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Resume;