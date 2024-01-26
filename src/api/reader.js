import * as utils from "./utils";

export async function getReaderList(params) {
    return await utils
        .getRequest(utils.getApiUrl("reader/list"), params)
        .then((resp) => {
            let list = resp.data.data;
            // 将角色名字从中提取出来
            list.forEach((element) => {
                element.roleName = element.role.name;
            });
            return resp.data;
        });
}
