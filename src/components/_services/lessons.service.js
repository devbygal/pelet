import { fetchWrapper } from '../_helpers';

const baseUrl = `http://proj7.ruppin-tech.co.il/api/Lessons`;

export const lessonsService = {
    lessons,
};

function lessons() {
    return fetchWrapper.get(baseUrl).then((values) => {
        return values;
    });
}