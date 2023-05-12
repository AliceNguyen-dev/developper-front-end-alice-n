import React from "react";
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

import Beeflex from "../assets/beeflex.jpg";
import Take from "../assets/take.jpg";
import TonLogo from "../assets/async-avatar.png";
import Coif from "../assets/3ci.jpg"

function Home() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="home bg-header">
            <h2 className='title-page'>A Propos de Moi</h2>

            <div className="desc-about">
                <p className="desc-infos fadeIn">
                    Titulaire d'un Bac Professionnel ASSP et d'un diplôme Bac+4 de Développeur Full Stack, j'ai suivis une formation intensive de Développeur Web et Web Mobile chez Social Builder d'une durée de 3 mois et 1 mois de stage dans une entreprise de tourisme et hotel de luxe.<br />
                    Après la période de stage que j'ai réalisé, j'ai effectuée une formation en alternance de Développeur Full chez Cloud campus d'une durée de 2 ans. Au cours de cette formation en alternance de 2 ans, j'ai réalisé 1 an d'alternance au poste de Développeur Full Stack dans une agence web puis 1 an au poste de Développeur Front-End dans une entreprise de gestion des salariés en entreprise.
                </p>
            </div>

            <div className="do-work">
                <h2 className="title-page">Ce que j'aime faire</h2>
            </div>

            <div className="desc-work" id="list">
                <li>
                    <div className="box-color item1 ">
                        <p className="subItem">Application Développement</p>
                        <p className="textItem">Pouvoir créer des applications intéressantes et utiles mélant art et jeux.</p>
                    </div>
                </li>
                <li>
                    <div className="box-color item2">
                        <p className="subItem">UI Design</p>
                        <p className="textItem">L'ergonomie d'une application est important afin qu'on puisse satisfaire visuellement le projet.</p>
                    </div>
                </li>
                <li>
                    <div className="box-color item3">
                        <p className="subItem">Dessin</p>
                        <p className="textItem">Un moment de détente que j'aime partager que ce soit des animés ou des oeuvres classiques et originales.</p>
                    </div>
                </li>
                <li>
                    <div className="box-color item4">
                        <p className="subItem">Photographie</p>
                        <p className="textItem">Des instants à garder ou à partager en jouant avec les nuances des couleurs et de la luminosité.</p>
                    </div>
                </li>
                <li>
                    <div className="box-color item5">
                        <p className="subItem">Créatif Mercerie</p>
                        <p className="textItem">Des pièces créer par mes mains que ce soit du tricots, du crochet ou même de la broderie, les idées me viennent souvent en tête.</p>
                    </div>
                </li>
                <li>
                    <div className="box-color item6">
                        <p className="subItem">Musique</p>
                        <p className="textItem">Classique, pop ou rock, j'aime écouter de la musique, de plus j'aime jouer du piano.</p>
                    </div>
                </li>
            </div>


            <div className="do-work">
                <h2 className="title-page">Les entreprises dans lequel j'ai travaillée</h2>
            </div>

            <div className="carousel">
                {/* carousel des entreprises */}

                <Slider {...settings}>
                    <div className="box">
                        <img className="img-work" src={Take} alt="" />
                    </div>
                    <div className="box">
                        <img className="img-work" src={TonLogo} alt="" />
                    </div>
                    <div className="box">
                        <img className="img-work" src={Beeflex} alt="" />
                    </div>
                    <div className="box">
                        <img className="img-work" src={Coif} alt="" />
                    </div>
                    {/* <div className="box">
                        <img src={} alt="" />
                    </div> */}
                </Slider>
            </div>


        </div>
    )
}
export default Home;