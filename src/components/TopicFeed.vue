<template>
	<div class="container">
		<div class="row" v-for="tweet in tweets" >
		<div class="card my-3" style="width: 100%;">
			<div class="card-body">
				<h5 class="card-title text-left" style="color: #6d89a2;">{{ tweet['name'] }}</h5>				
				<p class="text-left card-text">{{ tweet['tweet'] }}</p>	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import fb from '@/firebase.js'
import { log } from 'util';
  export default {
	name: 'topicfeed',
	computed : {

  	},
    data: function() {
      return {
      }
    },
    methods: {
      
	},
	mounted: function() {
		console.log(this.$route.params.topic)
	},
	firebase() {
		return {
			tweets: fb.database().ref('/topics').child(this.$route.params.topic)
		}
  }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  
</style>