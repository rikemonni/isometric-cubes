<template>
  <div id="app">
    <div class="text">
      <div class="titles">
        <h1>Kolmekolmesata</h1>
      </div>
      <section class="contact">
        TAMPERE<br>
        contact via <a href="mailto:kolmekolmesata.multimedia.ry@gmail.com">email</a>
      </section>
    </div>
    <cubes></cubes>
  </div>
</template>

<script>
import Cubes from './components/Cubes.vue'

export default {
  name: 'app',
  components: {
    Cubes
  }
}
</script>

<style>
body {
  background-color: #2a252d;
  color: #339999;
  margin: 0;
  padding: 0;
  font-family: monospace;
  font-family: 'Press Start 2P';
  font-size: 1em;
  text-shadow: 3px 3px 0px #2a252d;
}

a {
  color: lightgrey;
  /* color: hsl(180, 50%, 50%); */
  /* text-shadow: 0px 0px 1px #2a252d; */
  text-decoration: none;
  display: inline-block;
  pointer-events: all;
  font-size: 1em;
}

.contact {
  position: absolute;
  padding: 1em;
  bottom: 0;
  left: 0;
  font-size: 1.3em;
  line-height: 1.3em;
}

.text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  color: lightgrey;
  pointer-events: none;
}

.titles {
  text-align: center;
}
.titles::selection {
  background-color: #339999;
  color: #2a252d;
}
h1, h2 {
  font-family: 'Press Start 2P';
  text-shadow: 3px 3px 0px #2a252d;
  font-weight: 10;
  margin: 0;
}

h1 {
  text-transform: uppercase;
  font-size: 5em;
}

@media only screen and (max-width:1080px){
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 1em;
  }
}

@media only screen and (max-width:720px){
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1em;
  }
}

</style>
