import { fetchWrapper } from '../_helpers';

const baseUrl = `http://proj7.ruppin-tech.co.il/api/Exercises`;

export const exerciseService = {
     getAllExercises,
     updateExercise
};

function getAllExercises() {
    return fetchWrapper.get(baseUrl);
}

function updateExercise(id,params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}
