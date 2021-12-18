import { fetchWrapper } from '../_helpers';

const baseUrl = `http://proj7.ruppin-tech.co.il/api/TechnicalWords`;

export const wordService = {
     getAllWords,
     updateWord,
     postWord,
     deleteWord,
     getByWordId
};

function getAllWords() {
    return fetchWrapper.get(baseUrl);
}

function updateWord(id,params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

function postWord(params) {
    return fetchWrapper.post(`${baseUrl}`, params );
  }
  function deleteWord(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
  }
  function getByWordId(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}