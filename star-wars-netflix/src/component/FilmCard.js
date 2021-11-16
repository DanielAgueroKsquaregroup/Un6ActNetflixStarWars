import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material'
import movieImage from '../assets/movieImages/index';
import CrawlModal from './CrawlModal';

function FilmCard(props){

    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);
    return(
        <div>
            <Card key = {props.id} className = "Child" >
                <CardContent>
                    <img
                        className = "images"
                        src={movieImage[props.id]}
                        alt = {props.title}
                        />
                    <Typography className="Typography"> {props.title} </Typography>
                    <Typography className="Typography"> {props.director} </Typography>
                    <Typography className="Typography"> {props.released} </Typography>
                    <Button className = "Btn-description" onClick={handleOpen}>See opening</Button>
                        <CrawlModal
                            open={modal}
                            close={handleClose}
                            crawl={props.crawl}
                        />
                </CardContent>
            </Card>
        </div>
    );
}

export default FilmCard;