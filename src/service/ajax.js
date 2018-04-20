import axios from 'axios';


export default {
    post(url, param, type) {
        let ContentType = "application/json"
        if (type === 'file') {
            ContentType = 'multipart/form-data'
        }
        return axios({
            method: 'post',
            url,
            data: param,
            transformRequest: [function (data, headers) {
                let requestData = '';
                for (const key in data) {
                    requestData = `${requestData}${key}=${encodeURIComponent(data[key])}&`
                }
                requestData = requestData.substring(0, requestData.length - 1);
                return requestData;
            }],
            transformResponse: [function (data) {
                const resposeData = JSON.parse(data);
                return resposeData;
            }],
            headers: {
                "Content-Type": ContentType,
                "X-Requested-With": 'XMLHttpRequest',
                "X-Custom-Header": "ProcessThisImmediately"
            },
            timeout: 5000,
        }).then(function (response) {
            if (response.status === 200) {
                if (response.data.code && response.data.code === 1) {
                    return response.data.data;
                } else {
                    throw response.data.msg;
                }
            } else {
                throw String('网络请求错误');
            }
        }).catch(function (e) {
            throw e;
        });
    },
    get(url, param ,type) {
        let ContentType = "application/json"
        if (type === 'file') {
            ContentType = 'multipart/form-data'
        }
        return axios({
            method: 'get',
            url,
            params: param,
            transformRequest: [function (data, headers) {
                let requestData = '';
                for (const key in data) {
                    requestData = `${requestData}${key}=${encodeURIComponent(data[key])}&`
                }
                requestData = requestData.substring(0, requestData.length - 1);
                return requestData;
            }],
            transformResponse: [function (data) {
                const resposeData = JSON.parse(data);
                return resposeData;
            }],
            headers: {
                "Content-Type": ContentType,
                "X-Requested-With": 'XMLHttpRequest',
                "X-Custom-Header": "ProcessThisImmediately"
            },
            timeout: 5000,
        }).then(function (response) {
            if (response.status === 200) {
                if (response.data.code && response.data.code === 1) {
                    return response.data.data;
                } else {
                    throw response.data.msg;
                }
            } else {
                throw String('网络请求错误');
            }
        }).catch(function (e) {
            throw e;
        });
    }
}