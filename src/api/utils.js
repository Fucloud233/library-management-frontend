import axios from "axios";

export function postRequest(apiUrl, data) {
    return axios({
        method: "post",
        url: apiUrl,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    });
}

export function deleteRequest(apiUrl, data) {
    return axios({
        method: "delete",
        url: apiUrl,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    });
}

export function putRequest(apiUrl, data) {
    return axios({
        method: "put",
        url: apiUrl,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    });
}

export function getRequest(apiUrl, params) {
    return axios({
        method: "get",
        url: apiUrl,
        params: params,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export function getApiUrl(name) {
    var apiUrl = "/api/" + name;
    return apiUrl;
}
