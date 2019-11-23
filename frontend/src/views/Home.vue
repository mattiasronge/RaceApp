<template>
  <div class="home">
    
      <section class="img-bg" > 
        <img class="img-bg" alt="runningman" src="@/assets/background.jpg">
      </section>
      <template>


  <div class="container">

    <v-autocomplete
      label="Test custom filters"
      :items="states"
      :filter="activeFilter"
      filled
      rounded
    ></v-autocomplete>

    {{ model }}
  </div>
</template>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  }
}
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

  left: 0;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}

nav ul{

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

.container {
    position: relative;
    top: 120px;
    height: 400px;
    border-radius: 4px;
    background: #ffffff;
    padding: 32px;
    padding-bottom: 24px;
    width: 441px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.12) ;

}
</style>
