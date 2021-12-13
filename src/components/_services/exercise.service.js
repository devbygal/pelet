import { fetchWrapper } from '../_helpers';

const baseUrl = `http://proj7.ruppin-tech.co.il/api/Exercises`;

export const exerciseService = {
     getAllExercises
};

function getAllExercises() {
    return fetchWrapper.get(baseUrl);
}