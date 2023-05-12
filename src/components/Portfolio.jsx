import React, { useState } from "react";

import {
    GridList,
    GridListTile,
    makeStyles,
    Modal,
    Backdrop,
    Fade
} from "@material-ui/core";


import './Portfolio.css';



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


function Portfolio() {
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



        </div>




    );
}

export default Portfolio;