<template>
    <div class="loginForm">
    <h1>Login</h1>
    <hr />
    <form @submit.prevent="login" class="login">
      <label for="email">Username/Email:</label>
      <input type="text" name="email" v-model="email" class="login-form-input" />

      <label for="email">Password:</label>
      <input type="password" name="password" id="" class="login-form-input" />
      <!-- <router-link class="forget-pass" to="/forget-password">Forget Password?</router-link> -->
      <button>Login</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email : null,
      password: null,
    }
  },
  methods: {
    login() {
      axios.get('http://127.0.0.1:8000/api/user-info').then(response => {
          console.log(response);
      });
      localStorage.setItem('token','sdknds');
      this.$router.push('/home');
    }
  }
};
</script>

<style>
.forget-pass {
  text-align: right;
  float: right;
}
.loginForm {
  width: 40vw;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.loginForm label {
  display: block;
  font-size: 18px;
  font-weight: 600;
}
.loginForm .login-form-input {
  width: 100%;
  height: 30px;
  padding: 4px 4px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
}
.loginForm button {
  display: block;
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  color: white;
  background: rgb(19, 138, 72);
}
.loginForm button:hover {
  background: rgb(43, 33, 33);
}
</style>
