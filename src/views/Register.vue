<template>
  <div style="width: 50%; margin: 0 25%">
    <div class="el-alert--error" v-if="errors.register">
      {{ errors.register.message }}
    </div>
    <el-form>
      <el-form-item label="Your name">
        <el-input v-model="registerForm.name" />
        <div v-if="errors.register && errors.register.errors.name" class="el-form-item__error">
          {{ errors.register.errors.name.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item label="Your e-mail">
        <el-input v-model="registerForm.email" />
        <div v-if="errors.register && errors.register.errors.email" class="el-form-item__error">
          {{ errors.register.errors.email.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="registerForm.password" />
        <div v-if="errors.register && errors.register.errors.password" class="el-form-item__error">
          {{ errors.register.errors.password.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item label="Repeat password">
        <el-input type="password" v-model="registerForm.password_confirm" />
        <div v-if="errors.register && errors.register.errors.password_confirm" class="el-form-item__error">
          {{ errors.register.errors.password_confirm.join(', ') }}
        </div>
      </el-form-item>
      <el-button @click="register(registerForm)" type="info">Send</el-button>
    </el-form>
  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
  
    export default {
        name: "Register",
        methods: mapActions(['register']),
        computed: mapState(['errors']),
        data() {
            return {
                registerForm: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirm: null,
                },
            }
        }
    }
</script>

<style scoped>

</style>