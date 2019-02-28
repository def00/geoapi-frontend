<template>
  <div style="width: 50%; margin: 0 25%">
    <el-form>
      <div class="el-alert--error" v-if="errors.login">
        {{ errors.login.message }}
      </div>
      <el-form-item label="Your e-mail">
        <el-input v-model="loginForm.email" />
        <div v-if="errors.login && errors.login.errors.email" class="el-form-item__error">
          {{ errors.login.errors.email.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="loginForm.password" />
        <div v-if="errors.login && errors.login.errors.password" class="el-form-item__error">
          {{ errors.login.errors.password.join(', ') }}
        </div>
      </el-form-item>
      <el-button @click="login(loginForm)" type="info">Log in</el-button>
    </el-form>
  </div>
  
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "Login",
        methods: mapActions(['login']),
        computed: mapState(['errors']),
        data() {
            return {
                loginForm: {
                    email: null,
                    password: null
                }
            }
        }
    }
</script>

<style scoped>

</style>