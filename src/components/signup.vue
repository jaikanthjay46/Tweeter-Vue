<template>
  <div class="mt40">
    <p>Let's create a new account !</p>
	<input type="text" v-model="name" placeholder="Name"><br>
	<input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="signUp">Sign Up</button>
    <span>or  <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
  import firebase from '@/firebase.js'
  export default {
    name: 'signUp',
    data: function() {
      return {
		name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
			var user2  = firebase.auth().currentUser;
			user2.updateProfile({
				displayName: this.name,
			}).then(() =>{
				this.$router.replace('/home')
			})
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
  .mt40 {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>