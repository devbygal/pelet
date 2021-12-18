import { fetchWrapper } from '../_helpers';

const baseUrl = `http://proj7.ruppin-tech.co.il/api/Lessons`;

export const lessonService = {
     getAllLessons,
     updateLesson,
     postLesson,
     deleteLesson,
     getByCourseId
};

function getAllLessons() {
    return fetchWrapper.get(baseUrl);
}

function updateLesson(id,params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

function postLesson(params) {
    return fetchWrapper.post(`${baseUrl}`, params );
  }
  function deleteLesson(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
  }
  function getByCourseId(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}