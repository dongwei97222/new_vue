import request from "@/utils/request";
import Qs from "qs";

// 分页获取数据方法
export function loadDataByPage (param) {
    return request({
        url: "/rest/getObjDataByPage",
        method: "post",
        data: Qs.stringify(param)
    });
}
// 获取元数据方法
export function loadMetaData (param) {
    return request({
        url: "/rest/getObjMetaData",
        method: "post",
        data: Qs.stringify(param)
    });
}
// 处理vicimsg方法
export function loadVicimsgData (param) {
    return request({
        url: "/rest/vicimsg",
        method: "post",
        data: Qs.stringify(param)
    });
}
// 执行sql方法
export function executeSql (param) {
    return request({
        url: "/rest/executeSql",
        method: "post",
        data: Qs.stringify(param)
    });
}

// 获取数据方法
export function loadData (param) {
    return request({
        url: "/rest/getObjData",
        method: "post",
        data: Qs.stringify(param)
    });
}
// 根据id获取数据方法
export function getObjDataById (param) {
    return request({
        url: "/rest/getObjDataById",
        method: "post",
        data: Qs.stringify(param)
    });
}
// 删除数据方法
export function delData (param) {
    return request({
        url: "/rest/delObjData",
        method: "post",
        data: Qs.stringify(param)
    });
}
// 保存数据
export function saveData (param) {
    return request({
        url: "/rest/saveObjData",
        method: "post",
        data: Qs.stringify(param)
    });
}
// 根据id删除数据方法
export function delObjDataByIdList (param) {
    return request({
        url: "/rest/delObjDataByIdList",
        method: "post",
        data: Qs.stringify(param)
    });
}
