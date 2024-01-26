import * as utils from "./utils";

export async function adminLogin(loginInfo) {
    return await utils
        .postRequest(utils.getApiUrl("admin/login"), loginInfo)
        .then((resp) => resp.data);
}
