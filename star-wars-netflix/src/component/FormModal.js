import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { Modal } from '@mui/material'
import { Box } from '@mui/system';

function FormModal(props){
    const [planets, setPlanets] = useState([]);
    const [idField, setIdField] = useState();
    const [titleField, setTitleField] = useState();
    const [producerField, setProducerField] = useState();
    const [dateField, setDateField] = useState();
    const [directorField, setDirectorField] = useState();
    const [planetField, setPlanetField] = useState();

    useEffect(() =>{
        axios.get('https://swapi.dev/api/planets/')
        .then( res => {
            setPlanets(res.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    // ONCE THE USER SUBMIT A MOVIE WE NEED TO PASS THE DATA TO FilmCard TO RENDER IT
    const handleOnSubmit = e => {
        e.preventDefault();

        // HERE, THE onFilmAdded movieImage PROPERTY HAS THE SAME VALUE DUE TO THE USE OF THE SAME IMAGE EVERYTIME
        props.onFilmAdded({
            episode_id: idField,
            title: titleField,
            producer: producerField,
            release_date: dateField,
            director: directorField,
            movieImage: 7,
            planets: planetField
        });

            setIdField('');
            setTitleField('');
            setProducerField('');
            setDateField('');
            setDirectorField('');
            setPlanetField('');
    };
    return(
        <div>
            <Modal
                open={props.open}
                onClose={props.close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box>    
                    <form onSubmit = {handleOnSubmit} id="filmForm" >
                        <input type="number" min="7" placeholder="id"  required value={idField} onChange={e => setIdField(e.target.value)}></input>
                        <input type="text" placeholder="movie title" required value={titleField} onChange={e => setTitleField(e.target.value)}></input>
                        <input type="text" placeholder="producer" required value={producerField} onChange={e => setProducerField(e.target.value)}></input>
                        <input type="date" placeholder="release date" required value={dateField} onChange={e => setDateField(e.target.value)}></input>
                        <input type="text" placeholder="director" required value={directorField} onChange={e => setDirectorField(e.target.value)}></input>
                        <input type="file" placeholder="Image" required/>
                        <select placeholder="planet" required onChange={e => setPlanetField(e.target.value)}>
                            <option value=""></option>
                            {planets.map(planet=>(
                                <option key={planet.name} value={planetField}>{planet.name}</option>
                            ))}
                        </select>
                        <button type="submit" form="filmForm" value="Submit" >Submit</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default FormModal;