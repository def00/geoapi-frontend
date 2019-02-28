import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import api from './services/api'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      token: null,
      // my records
      records: [],
    },
    // found record data
    ipData: null,
    // form error
    errors: {
      login: null,
      register: null,
      add: null,
      edit: null,
      find: null,
      findUrl: null,
    }
  },
  mutations: {
    token (state, token) {
      state.user.loggedIn = true;
      state.user.token = token;
      state.errors.login = null;
      state.errors.register = null;
    },
    removeToken (state) {
      state.user.loggedIn = false;
      state.user.token = null;
      state.user.records = [];
    },
    records (state, records) {
      state.user.records = records;
    },
    remove (state, id) {
      // find by id and remove from array
      state.user.records.splice(state.user.records.filter(record => record.id == id)[0], 1);
    },
    append (state, data) {
      state.user.records.push(data);
      state.errors.add = null;
    },
    change (state, data) {
      // find by id and change
      state.user.records.filter(record => record.id == data.id)[0] = data;
      state.errors.edit = null;
    },
    ipInfo (state, data) {
      state.ipData = data;
      state.errors.find = null;
      state.errors.findUrl = null;
    },
    loginError (state, errors) {
      state.errors.login = errors;
    },
    registerError (state, errors) {
      state.errors.register = errors;
    },
    addError (state, errors) {
      state.errors.add = errors;
    },
    editError (state, errors) {
      state.errors.edit = errors;
    },
    findError (state, errors) {
      state.errors.find = errors;
    },
    findUrlError (state, errors) {
      state.errors.findUrl = errors;
    },
  },
  getters: {
    myRecords (state) {
      return state.user.records;
    }
  },
  actions: {
    /***
     * register action
     * @param context
     * @param payload
     * @returns {Promise<void>}
     */
    async register (context, payload) {
      try {
        const resp = await api.register(payload);
        // save token
        context.commit('token', resp.data.accessToken);
        // go to list
        router.push('/list');
      } catch (error) {
        // show errors on form
        context.commit('registerError', error.response.data)
      }
    },
    /***
     * login action
     * @param context
     * @param payload
     * @returns {Promise<void>}
     */
    async login (context, payload) {
      try {
        const resp = await api.login(payload);
        // save token
        context.commit('token', resp.data.accessToken);
        // go to list
        router.push('/list');
      } catch (error) {
        // form errors
        context.commit('loginError', error.response.data)
      }
    },
    /***
     * Logout action
     * @param context
     * @returns {Promise<void>}
     */
    async logout (context) {
       await api.logout(context.state.user.token);
       // remove token
       context.commit('removeToken');
       // go to main addres
       router.push('/');
    },
    /***
     * Get user records action
     * @param context
     * @returns {Promise<void>}
     */
    async getRecords (context) {
      // token not found
      if (! context.state.user.token) {
        router.push('/');
      }
      const resp = await api.getRecords(context.state.user.token);
      context.commit('records', resp.data)
    },
    /***
     * delete one record
     * @param context
     * @param data
     * @returns {Promise<void>}
     */
    async deleteRecord (context, data) {
      if (! context.state.user.token) {
        router.push('/');
      }
      await api.deleteRecord(context.state.user.token, data.id);
      // remove record with id
      context.commit('remove', data.id);
    },
    /***
     * add record
     * @param context
     * @param payload
     * @returns {Promise<void>}
     */
    async addRecord (context, payload ) {
      if (! context.state.user.token) {
        router.push('/');
      }
      try {
        const resp = await api.addRecord(context.state.user.token, payload);
        context.commit('append', resp.data)
      } catch (error) {
        // show error
        context.commit('addError', error.response.data);
        // throw error, just to keep dialog open
        throw error;
      }
    },
    /***
     * edit record
     * @param context
     * @param payload
     * @returns {Promise<void>}
     */
    async editRecord (context, payload) {
      if (! context.state.user.token) {
        router.push('/');
      }
      try {
        const resp = await api.editRecord(context.state.user.token, payload);
        context.commit('change', resp.data)
      } catch (error) {
        context.commit('editError', error.response.data);
        // throw error, just to keep dialog open
        throw error;
      }
    },
    /**
     * find by ip
     * @param context
     * @param ip
     * @returns {Promise<void>}
     */
    async findRecordByIP (context, ip) {
      if (! context.state.user.token) {
        router.push('/');
      }
      try {
        const resp = await api.findByIP(context.state.user.token, ip);
        context.commit('ipInfo', resp.data);
      } catch (error) {
        // form error
        context.commit('findError', error.response.data);
      }
    },
    /**
     * find by url
     * @param context
     * @param url
     * @returns {Promise<void>}
     */
    async findRecordByUrl (context, url) {
      if (! context.state.user.token) {
        router.push('/');
      }
      try {
        const resp = await api.findByUrl(context.state.user.token, url);
        context.commit('ipInfo', resp.data);
      } catch (error) {
        // form errors
        context.commit('findUrlError', error.response.data);
      }
    }
  }
})
