import React, { useState } from "react";
// import { useTable } from 'react-table';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


import {
    GridList,
    GridListTile,
    makeStyles,
    Modal,
    Backdrop,
    Fade
} from "@material-ui/core";


import './Portfolio.css';
// import './MissionList'



import uneSecond from "../assets/1secdumondemoderne.png";
import Escapade from "../assets/escapade-francaise.png";
import beeflex from "../assets/beemyflex.png";
import phim from "../assets/phim-viet.png";
import cpm from "../assets/cpm-paris.png";
import Transfert from "../assets/transfert-en-autocar.png"

import Maquette1 from "../assets/maquette01.png"
import Maquette2 from "../assets/maquette02.png"
import Maquette3 from "../assets/maquette03.png"
import Maquette4 from "../assets/maquette04.png"
import Maquette5 from "../assets/maquette05.png"
import Maquette6 from "../assets/maquette06.png"
import Maquette7 from "../assets/maquette07.png"
import Maquette8 from "../assets/maquette08.png"
import Maquette9 from "../assets/maquette09.png"
import Maquette10 from "../assets/maquette10.png"


const tileData = [
    {
        imgSrc: Maquette1
    },
    {
        imgSrc: Maquette2
    },
    {
        imgSrc: Maquette3
    },
    {
        imgSrc: Maquette4
    },
    {
        imgSrc: Maquette5
    },
    {
        imgSrc: Maquette6
    },
    {
        imgSrc: Maquette7
    },
    {
        imgSrc: Maquette8
    },
    {
        imgSrc: Maquette9
    },
    {
        imgSrc: Maquette10
    }
];




const useStyles = makeStyles((theme) => ({

    modal: {
        display: "grid !important",
        margin: "10px auto",
        gridTemplateColumns: "auto auto auto",
        "&:hover": {
            backgroundcolor: "red"
        }
    },
    glryimg: {
        outline: "none"
    }
}));


function Portfolio({ data }) {

    const [activeMission, setActiveMission] = useState(null);

    const handleMissionClick = (index, missionIndex) => {
      setActiveMission(activeMission === index ? null : { structureIndex: index, missionIndex });
    };

    



    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("false");

    const handleClose = () => {
        setOpen(false);
    };

    const handleImage = (value) => {
        setImage(value);
        setOpen(true);
        console.log(image);
    };



    // const data = useMemo(() => dataTable, [dataTable]); // Assurez-vous que dataTable est défini

//   const columns = useMemo(() => [
//     {
//       Header: 'Structures',
//       accessor: 'structure',
//     },
//     {
//       Header: 'Missions',
//       accessor: 'mission',
//       Cell: ({ row }) => (
//         <ul>
//           {row.values.mission.map((mission, index) => (
//             <li key={index}>{mission}</li>
//           ))}
//         </ul>
//       ),
//     },
//   ], []);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data });


// const [isPanelOpen, setIsPanelOpen] = useState(false);

//   const togglePanel = () => {
//     setIsPanelOpen(!isPanelOpen);
//   };

    // missions tableau
    // const dataTable = [
    //     { structure: 'Datintek', mission: ['Test','Test','Test','Test','Test','Test'], duree: '3 Mois', outils: 'Javascript / AngularJs / Typescript / API Rest'},
    //     { structure: 'Beemyflex', mission: ['Réalisation d un onboarding','Suivi du cahier des charges','Modifications et amélioration sur certaines pages de ( dashboard )','Réalisation des maquettes sur Figma','Amélioration UI de l application','Responsive Mobile', "Réalisation d'un projet sur l'empreinte carbone ( autonomie totale )"], duree: '1 An', outils: 'ReactJs / Typescript / Azure Devops / Figma / API Rest'},

    //     { structure: '3CI', mission: ['Test','Test','Test','Test','Test','Test'], duree: '1 Mois', outils: 'AngularJs / Typescript / Javascript'},

    //     { structure: 'Agence Web MBA Corporate', mission: ['Suivi des cahiers des charges','Réalisation des différentes maquettes','Réalisation d un projet à moitié en autonomie','Amélioration de certaines pages sur certaines applications','Responsive mobile'], duree: '1 An', outils: 'Wordpress / SEO / Javascript / Typescript / ReactJs / Base de données ( PHPMyAdmin ) / NodeJs, Figma'},

    //     { structure: 'Escapade Française', mission: ['Modification sur certaines pages','Responsive Mobile','Ajout des produits sur la page Articles','Page dynamique avec slide','Gestion des produits en base de données'], duree: '1 Mois', outils: 'Wordpress / SEO / PHP'},
    //   ];

    

    const dataTable = [
        {
          structure: 'Datintek',
          missions: [
                { name: '★ Suivi du cahier des charges '},
                { name: '★ Modifications et amélioration sur certaines pages ( différentes applications )'},
                { name: '★ Réalisation des maquettes sur Figma '},
                { name: "★ Amélioration UI de l'application "},
                { name: '★ Responsive Mobile '},
                { name: "★ API Rest"},
          ],
          outils: 'Javascript / AngularJs / Typescript / API Rest',
          duree: '3 mois', 
        },
        
        {
           structure: 'Beemyflex',
            missions: [
                { name: '★ Réalisation d un onboarding'},
                { name: '★ Suivi du cahier des charges '},
                { name: '★ Modifications et amélioration sur certaines pages de ( dashboard )'},
                { name: '★ Réalisation des maquettes sur Figma '},
                { name: "★ Amélioration UI de l'application "},
                { name: '★ Responsive Mobile '},
                { name: "★ Réalisation d'un projet sur l'empreinte carbone ( autonomie totale )"},
            ],
            outils: 'ReactJs / Typescript / Azure Devops / Figma / API Rest',
            duree: '1 an',
        },

        {
        structure: 'Agence Web MBA Corporate',
        missions: [
            { name: '★ Suivi des cahiers des charges'},
            { name: '★ Réalisation des différentes maquettes '},
            { name: "★ Réalisation d'un projet à moitié en autonomie ( client ) "},
            { name: "★ Gestion de base de données"},
            { name: '★ Amélioration de certaines pages sur certaines applications '},
            { name: "★ Responsive mobile "},
        ],
        outils: 'Wordpress / SEO / Javascript / Typescript / ReactJs / Base de données ( PHPMyAdmin ) / NodeJs, Figma',
        duree: '1 an',
            
            
        },

        {
            structure: 'Escapade Française',
            missions: [
                { name: "★ Modification sur certaines pages "},
                { name: '★ Responsive Mobile '},
                { name: "★ Ajout des produits sur la page Articles "},
                { name: '★ Page dynamique avec slide'},
                { name: "★ Gestion des produits en base de données "},
            ],
            outils: 'Javascript / AngularJs / Typescript / API Rest',
            duree: '1 mois',
                  
        },






          ];



    
    return (
        <div className="exp bg-header">
            <div className="projet-expo">
                <h2 className='title-page titleTwo'>Mes Projets</h2>
            </div>

            <div class="ag-format-container">
                <div class="ag-courses_box">
                    <div class="ag-courses_item">
                        <a href="https://www.escapadefrancaise.com/" target="_blank" rel="noopener noreferrer" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                <img src={Escapade} alt="" className="img-port" />
                            </div>

                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="https://transfert-en-autocar.fr/" target="_blank" rel="noopener noreferrer" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                <img src={Transfert} alt="" className="img-port" />
                            </div>

                        </a>
                    </div>


                    <div class="ag-courses_item">
                        <a href="https://1s-du-monde-moderne.fr/" target="_blank" rel="noopener noreferrer" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                <img src={uneSecond} alt="" className="img-port" />
                            </div>

                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="https://www.cpmparis.com/" target="_blank" rel="noopener noreferrer" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                <img src={cpm} alt="" className="img-port" />
                            </div>

                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="https://www.beemyflex.com/" target="_blank" rel="noopener noreferrer" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                <img src={beeflex} alt="" className="img-port" />
                            </div>

                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="https://phim-viet-app.vercel.app/" target="_blank" rel="noopener noreferrer" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                <img src={phim} alt="" className="img-port" />
                            </div>
                        </a>
                    </div>



                </div>
            </div>


            <div className="projet-expo">
                <h2 className='title-page titleTwo'>Mes Maquettes</h2>
            </div>

            <div className="exp-gallery">
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.imgSrc} className="container">
                            <img
                                src={tile.imgSrc}
                                alt={tile.title}
                                onClick={(e) => handleImage(tile.imgSrc)}
                                className="glryimg"
                            />
                        </GridListTile>
                    ))}
                </GridList>
                <Modal
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}
                >
                    <Fade in={open} timeout={500} className={classes.imgSrc}>
                        <img
                            src={image}
                            alt="asd"
                            style={{ maxHeight: "70%", maxWidth: "70%" }}
                        />
                    </Fade>
                </Modal>
            </div>


            <div className="projet-expo">
                <h2 className='title-page titleTwo'>Mes Missions</h2>
            </div>
            <div class="ag-desc_box">
                    {/* <div class="ag-courses_item">
                        <p className="desc-box">Développement et implémentation d'interfaces utilisateur réactives et interactives en HTML5, CSS3 et JavaScript.</p>
                        <p className="desc-box">Garantir une compatibilité multi-navigateurs optimale sur tous les appareils.</p>
                        <p className="desc-box">Optimisation des performances des applications web en identifiant et en résolvant les problèmes.</p>
                        <p className="desc-box">Utilisation de frameworks Front End comme React, Angular ou Vue.js.</p>
                        <p className="desc-box">Mise en œuvre de méthodologies de développement agile.</p>
                        <p className="desc-box">Tests unitaires et fonctionnels pour assurer la qualité et la stabilité du code Front End.</p>
                        <p className="desc-box">Respecter les meilleures pratiques en matière de conception UX/UI.</p>
                        <p className="desc-box">Intégration de fonctionnalités côté client avec des API REST ou GraphQL.</p>
                    </div> */}


                    {/* Tableau des missions */}
                    <div className="grid-container">
                        <table>
                            <thead>
                            <tr>
                                <th>Structures</th>
                                <th>Missions</th>
                                <th>Outils Info</th>
                                <th>Durée</th>
                            </tr>
                            </thead>
                            <tbody>
                                {dataTable.map((mission, structureIndex) => (
                                    <tr key={structureIndex}>
                                    <td>{mission.structure}</td>
                                    <td>
                                        <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`panel${structureIndex}a-content`}
                                            id={`panel${structureIndex}a-header`}
                                        >
                                            <Typography component="span">Missions</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul>
                                            {mission.missions.map((project, missionIndex) => (
                                                <li key={project.name}>
                                                <button className="accordion-button">{project.name}</button>
                                                {activeMission &&
                                                    activeMission.structureIndex === structureIndex &&
                                                    activeMission.missionIndex === missionIndex && (
                                                    <ul className="sublist">
                                                    {project.tasks.map(task => (
                                                        <li key={task}>{task}</li>
                                                    ))}
                                                    </ul>
                                                )}
                                                </li>
                                            ))}
                                            </ul>
                                        </AccordionDetails>
                                        </Accordion>
                                    </td>
                                    <td>{mission.duree}</td>  {/* Placez les cellules ici */}
                                    <td>{mission.outils}</td>
                                    </tr>
                                ))}
                                </tbody>
                        </table>
                    </div>

                </div>

            </div>


        




    );
}

export default Portfolio;