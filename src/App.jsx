import React from "react";
import './App.css';

// components
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import Avatar03 from "./assets/avatar03.png";
import IconsG from "./assets/iconsG.png";
import IconsL from "./assets/iconsL.png";
import IconsP from "./assets/iconsP.png";
import IconsLo from "./assets/iconsLo.png";
import IconsE from "./assets/iconsE.png";
// import IconsT from "./assets/iconsT.png";
import IconG from "./assets/iconG.png";
import IconL from "./assets/iconL.png";

// import "./Responsive.scss"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="route-app">

        <div className="logo animated animatedFadeInUp fadeInUp">
          <img className="avatar" src={Avatar03} alt="profil" />

          <div className="infos">
            <h1 className="title">Alice NGUYEN <span className="post">Développeur Front-End</span></h1>
          </div>

          <div className="box-display">
            <div className="infos02"><a href="https://github.com/AliceNguyen-dev" className="link-icons"><img src={IconsG} alt="" className="icons" /></a></div>
            <div className="infos02"><a href="https://www.linkedin.com/in/alice-nguyen-asspadev/" className="link-icons"><img src={IconsL} alt="" className="icons" /></a></div>
            <div className="infos02"><a href="https://www.pinterest.fr/nguyen_alice/" className="link-icons"><img src={IconsP} alt="" className="icons" /></a></div>
          </div>

          <div className="infos03">

            <div className="boxTab">


              {/* <div className="boxFlex">
                <div className="iconsItem"><img src={IconsT} alt="" className="iconsTab" />
                  <div className="item-desc">
                    <span className="sub-title" >Mobile</span>
                    <p className="text-desc">0000000000</p>
                  </div>
                </div>
              </div> */}

              <div className="boxFlex">
                <div className="iconsItem"><img src={IconsLo} alt="" className="iconsTab" />
                  <div className="item-desc">
                    <span className="sub-title" >Localisation</span>
                    <p className="text-desc">A Proximité du Parc Disneyland Paris ( RER A )</p>
                  </div>
                </div>
              </div>

              <div className="boxFlex">
                <div className="iconsItem"><img src={IconG} alt="" className="iconsTab" />
                  <div className="item-desc">
                    <span className="sub-title" >Github</span>
                    <p className="text-desc"><a href="https://github.com/AliceNguyen-dev">Github Alice</a></p>
                  </div>
                </div>
              </div>

              <div className="boxFlex">
                <div className="iconsItem"><img src={IconL} alt="" className="iconsTab" />
                  <div className="item-desc">
                    <span className="sub-title" >Linkedin</span>
                    <p className="text-desc"><a href="https://www.linkedin.com/in/alice-nguyen-asspadev/">Github Alice</a></p>
                  </div>
                </div>
              </div>

              <div className="boxFlex">
                <div className="iconsItem"><img src={IconsE} alt="" className="iconsTab" />
                  <div className="item-desc">
                    <span className="sub-title" >Email</span>
                    <a href="mailto:alicenguyen.pro01@gmail.com" className="link-mail"><p className="text-desc">alicenguyen.pro01@gmail.com</p></a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* <div class="pdf-doc">
            <a class="cvItem" href="./assets/Alice_N_CV.pdf" download="Alice_N_CV.pdf">Téléchargez le CV</a>
          </div> */}


        </div>


        <div className="box-desc">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
