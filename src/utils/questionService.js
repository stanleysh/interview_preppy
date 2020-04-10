import tokenService from './tokenService';

function getUserQuestions (apiPath) {
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(apiPath, options).then(res => res.json());
};

function getOneQuestion (questionId, apiPath) {
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(questionId)
    };
    return fetch(apiPath, options).then(res=>res.json());
};

function newQuestion (question, apiPath) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(question)
    };
    return fetch(apiPath, options).then(res => res.json());
};

function updateQuestion (question, apiPath) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(question)
    };
    return fetch(apiPath, options).then(res => res.json());
};

function deleteQuestion (apiPath) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(apiPath, options).then(res => res.json());
}

export default {
    getUserQuestions,
    getOneQuestion,
    newQuestion,
    updateQuestion,
    deleteQuestion
}