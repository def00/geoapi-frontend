import axios from 'axios';
const BASE_URL = 'https://test-geoapi-backend.herokuapp.com/api';

export default {
    /**
     * register
     * @param data
     * @returns {Promise<any>}
     */
    async register (data) {
        return await axios.post(BASE_URL + '/register', data);
    },
    /**
     * login
     * @param data
     * @returns {Promise<any>}
     */
    async login (data) {
        return await axios.post(BASE_URL + '/login', data);
    },
    /**
     * logout
     * @param token
     * @returns {Promise<any>}
     */
    async logout (token) {
        return  await axios.get(BASE_URL + '/logout', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    /**
     * get records
     * @param token
     * @returns {Promise<any>}
     */
    async getRecords (token) {
        return await axios.get(BASE_URL + '/addresses', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    /**
     * delete record
     * @param token
     * @param id
     * @returns {Promise<void>}
     */
    async deleteRecord (token, id) {
        return await axios.delete(BASE_URL + '/addresses/' + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    /**
     * add record
     * @param token
     * @param data
     * @returns {Promise<any>}
     */
    async addRecord (token, data ) {
        return await axios.post(BASE_URL + '/addresses/', data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    /**
     * edit record
     * @param token
     * @param data
     * @returns {Promise<any>}
     */
    async editRecord (token, data ) {
        return await axios.put(BASE_URL + '/addresses/' + data.id, data,{
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    /**
     * find by ip
     * @param token
     * @param ip
     * @returns {Promise<any>}
     */
    async findByIP (token, ip) {
        return await axios.post(BASE_URL + '/find/ip', {address: ip}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },
    /**
     * find by url
     * @param token
     * @param url
     * @returns {Promise<any>}
     */
    async findByUrl (token, url) {
        return await axios.post(BASE_URL + '/find/url', {address: url}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }
}