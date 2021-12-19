import React, { useEffect, useState } from 'react';
import { exerciseService } from '../../_services';

export const Exercise = () => {

    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        exerciseService.getAllExercises().then((data) => {
            setExercises(data);  
        })
    }, [])

    const openTopicsHTML = () => {
        document.querySelector('.megaMenuHtml').classList.toggle('display-on');
    }

    return (
        <>
     
        </>
    );
}