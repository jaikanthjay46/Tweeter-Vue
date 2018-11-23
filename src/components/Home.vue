<template>
	<div class="container-fluid">
		<div class="row">
			<p class="welcome-text">Welcome {{ name }}!</p>
		</div>
		<div class="row">
			<div class="col-2">
				<h5 class="text-left">
					Topics
				</h5>
				<ul class="list-group">
					<li class="list-group-item" v-for="topic in topics">
						{{ topic[".key"] }}
					</li>
				</ul>
			</div>
			<div class="col-10">
				<div class="row">
					<h5 class="text-left">Create a new tweet</h5>
				</div>
				<div class="row">
					<div class="col-8 pl0">
						<textarea v-model="tweetMsg" class="form-control " rows="3"></textarea>
					</div>
				</div>
				<div class="row">
					<div class="col-1 pl0 my-2 align-self-start">
						<button v-on:click="tweet()" class="btn btn-primary">Tweeter</button>
					</div>
				</div>
				<div class="row" v-for="tweet in tweets" >
					<div class="card my-3" style="width: 100%;">
						<div class="card-body">
							<h5 class="card-title text-left" style="color: #6d89a2;">{{ tweet['name'] }}</h5>
							
							<p class="text-left card-text">{{ tweet['tweet'] }}</p>
	
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import fb from '@/firebase.js'


  
export default {

  name: 'Home',
  computed : {
	name: () => {
		let user = fb.auth().currentUser;
		return user.displayName || "abc"
	}
  },
  data: function(){
    return {
		tweetMsg: ''
    }
  },
  methods: {
	tweet: function()  {
		console.log(this.tweetMsg)
		var topics = this.tweetMsg.match(/#[^\s]*/g);
		var tweetid = fb.database().ref().child('tweets').push().key;

		var updates = {};
		updates['/tweets/' + tweetid] = { tweet: this.tweetMsg, name: this.name} ;
		if(topics){
			for ( let topic of topics ){
				fb.database().ref().child('/topics/'+ topic.substr(1)).push(tweetid)
			}
		}

		fb.database().ref().update(updates);
	}
  },
  firebase: {
	topics: fb.database().ref('/topics'),
	tweets: fb.database().ref('/tweets')
  }
  
}
</script>
<style scoped>
	.welcome-text {
		margin-top: 5 px;
	}
	textarea {
		resize: none;
	}
	.pl0 {
		padding-left: 0;
	}
</style>
