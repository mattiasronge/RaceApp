<template>
  <v-app class="App">
<nav>
			<ul>

      <li><router-link to="/findrace">Explore</router-link> </li>
      <li><router-link to="/about">About</router-link> </li>
      <li><router-link to="/organizer">Organizer</router-link> </li>
			</ul>

		</nav>
      <router-view/>

  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

.img-bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
position: fixed;
  top: 0;
  left: 0;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}

nav ul{
	color: white;
	padding: 0;
	margin: 0;
	text-align: center;
	overflow: hidden;
	-webkit-transition: max-height 0.4s;
	-ms-transition: max-height 0.4s;
	-moz-transition: max-height 0.4s;
	-o-transition: max-height 0.4s;
	transition: max-height 0.4s;
}
nav ul li{
	display: inline-block;
	padding: 20px;
}
nav ul li:hover{
	background-color: #399077
}


</style>

