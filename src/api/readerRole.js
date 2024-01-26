import * as utils from "./utils";

export async function insertReaderRole(readerRole) {
    return await utils
        .postRequest(utils.getApiUrl(`role`), readerRole)
        .then((resp) => resp.data);
}

export async function deleteReaderRole(id) {
    return await utils
        .deleteRequest(utils.getApiUrl(`role/${id}`))
        .then((resp) => resp.data);
}

export async function updateReaderRole(readerRole) {
    return await utils
        .putRequest(utils.getApiUrl(`role`), readerRole)
        .then((resp) => resp.data);
}

export async function getReaderRole() {
    return await utils
        .getRequest(utils.getApiUrl("role/list"))
        .then((resp) => resp.data);
}

export async function getReaderRoleById(id) {
    return await utils
        .getRequest(utils.getApiUrl(`role/${id}`))
        .then((resp) => resp.data);
}
