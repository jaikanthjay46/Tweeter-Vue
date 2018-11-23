<template>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">
					<img src="https://community.frontierfoundry.co/uploads/db5237/original/1X/c46caae25ffa85a8cb3653969832446d340a8c9d.png" class="img-fluid" width="25px" alt="Logo">
					{{  title }}</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>			  
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				  <ul class="navbar-nav ml-auto">						
							<router-link tag="li" to="/" class="nav-item" active-class="active">
								<a class="nav-link">Home</a>
							</router-link>
				  </ul>				  
				</div>
		</nav>
</template>

<script>
/* eslint-disable */
export default {
	name: "v-header",
  data () {
    return { 
			title: "Tweeter"
		}
  }
}
</script>


<style scoped>	

</style>