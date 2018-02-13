import 'whatwg-fetch';

var baseUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/';

export function getCampers(topCampers) {
    return fetch(baseUrl + topCampers).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);
}