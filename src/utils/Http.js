export default class Http {

    static HOST = 'https://api.douban.com/v2/';

    static get(url, body) {
        return this.request(url, 'get', body)
    }

    static post(url, body) {
        return this.request(url, 'post', body)
    }

    static request(url, method, body) {
        let isOk;
        return new Promise((resolve, reject) => {
            fetch(this.HOST + url, {
                method,
                // headers:{"Content-Type": "application/x-www-form-urlencoded"},
                body
            })
                .then((response) => response.json())
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

}