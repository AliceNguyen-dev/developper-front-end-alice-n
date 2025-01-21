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
import Gold from "../assets/LOGO_GC_Noir.png";

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
                <span className="t-gras" ><span className="p-h-text">Diplômée récemment d'un Bac+4 en Développement Full Stack</span></span>, j'ai débuté ma formation par un programme intensif de trois mois chez Social Builder, spécialisé en Développement Web et Web Mobile. Cette formation a été complétée par un stage d'un mois au sein d'une entreprise de luxe dans le secteur du tourisme et de l'hôtellerie, où j'ai pu mettre en pratique mes connaissances nouvellement acquises.</p>
                <p className="desc-infos fadeIn">
                Cette première expérience m'a permis d'élargir mes compétences et a constitué un tremplin pour poursuivre ma formation en alternance chez Cloud Campus en tant que Développeur Full Stack, sur une période de deux ans. Durant cette alternance, j'ai passé une année au sein d'une Agence Web, travaillant sur divers projets au sein d'une équipe collaborative, puis une autre année en tant que Développeur Front-End dans une entreprise spécialisée dans la gestion des ressources humaines en entreprise. Ce dernier projet, réalisé en autonomie, a été particulièrement enrichissant et a contribué à l'obtention de mon diplôme de Développeur Full Stack.</p>
                <p className="desc-infos fadeIn">
                Au cours des derniers mois, j'ai également eu l'opportunité de travailler sur de nouveaux projets, notamment en explorant différents frameworks JavaScript.
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
                    <div className="box">
                        <img className="img-work" src={Gold} alt="" />
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
