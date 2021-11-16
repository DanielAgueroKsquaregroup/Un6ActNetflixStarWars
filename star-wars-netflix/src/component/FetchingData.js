import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Button } from '@mui/material'
import FilmCard from './FilmCard';
import FormModal from './FormModal';

/* const propTypes = {
    initialValue: PropTypes.number
}; */

function FetchingData(){
    const [addFilms, setAddFilms] = useState([]);
    const [films, setFilms] = useState([]);
    const [modal, setModal] = useState(false);
    const handleClose = () => setModal(false);
    const handleOpen = () => setModal(true);
    /* MANAGE ADDING A FILM */
    const onFilmAdded = (addFilm) => {
        setAddFilms([...addFilms, addFilm]);
    };

    useEffect( () => {
        axios.get('https://swapi.dev/api/films/')
        .then(res => {
            console.log(res.data.results);
            setFilms(res.data.results);
        })
        .catch(error => console.log(error))
    }, []);

    return(
        <div>
            {/* ADDING FILMS: SENDING STATE TO WATCH ANY CHANGES ON THE LIST AND ADD FILM IF NEEDED */}
            <Button className="Btn-description" onClick={handleOpen}>Add film</Button>
            <FormModal
                open={modal}
                close={handleClose}
                onFilmAdded={onFilmAdded}
            />
            {  films.map(film => (
                <FilmCard
                    id={film.episode_id}
                    title={film.title}
                    director={film.director}
                    released={film.release_date}
                    crawl={film.opening_crawl}
                />
            ))}
        </div>
    );
    
}

export default FetchingData;