<template>
  <div id="app">
    <el-container>
      <el-aside>
        <el-menu>
          <el-menu-item index="1" v-if="!user.loggedIn">
            <router-link to="/register">Register</router-link>
          </el-menu-item>
          <el-menu-item index="2" v-if="!user.loggedIn">
            <router-link to="/login">Login</router-link>
          </el-menu-item>
          <el-menu-item index="4" v-if="user.loggedIn">
            <router-link to="/logout">Logout</router-link>
          </el-menu-item>
          <el-menu-item index="3" v-if="user.loggedIn">
            <router-link to="/list">Your records</router-link>
          </el-menu-item>
          <el-menu-item index="5" v-if="user.loggedIn">
            <router-link to="/find">Find</router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <router-view/>

    </el-container>
   
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  a {
    color: #000;
  }
</style>
<script>
  import { mapState } from 'vuex'
  export default {
      name: "app",
      computed: {
          ...mapState(['user']),
      }
  }
</script>