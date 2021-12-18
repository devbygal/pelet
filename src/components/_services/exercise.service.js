import { fetchWrapper } from '../_helpers';

const baseUrl = `http://proj7.ruppin-tech.co.il/api/Exercises`;

export const exerciseService = {
     getAllExercises,
     updateExercise,
     postExercise,
     deleteExercise,
     getByExerciseId
};

function getAllExercises() {
    return fetchWrapper.get(baseUrl);
}

function updateExercise(id,params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

function postExercise(params) {
    return fetchWrapper.post(`${baseUrl}`, params );
  }
  function deleteExercise(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
  }

  function getByExerciseId(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}