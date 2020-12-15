<template>
  <div id="app">
<<<<<<< HEAD
    <v-app>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
=======
    <div class="header">
      <h1>Sprint 3</h1>
      <nav>
        <button v-on:click="init">Inicio</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="footer">
      <h2>©Equipo15 - G1M2</h2>
    </div>
>>>>>>> 2a275bae66633a7f2dd0c22c48501e5c3361fa93
  </div>
</template>

<script>
<<<<<<< HEAD
//import HelloWorld from './components/HelloWorld'
import Inicio from './components/Inicio'


export default {
  name: 'App',
  components: {
    Inicio
=======
export default {
  name: 'App',
  components: {
  },
  methods: {
    init: function () {
      if (this.$route.name !== "inicio") {
        this.$router.push({name: "inicio"})
      }
    }
  },
  beforeCreate: function(){
    this.$router.push({name:"inicio"})
>>>>>>> 2a275bae66633a7f2dd0c22c48501e5c3361fa93
  }
}
</script>

<style>
<<<<<<< HEAD
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
=======
body{
  margin: 0 0 0 0;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747 ;
  color:#E5E7E9 ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1{
  width: 20%;
  text-align: center;
}

.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}

.header nav button{
  color: #E5E7E9;
  background: #283747;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
  transition: all 0.5s ease;
  cursor: pointer;
}

.header nav button:hover{
  color: #283747;
  background: #E5E7E9;
  border: 1px solid #E5E7E9;
}

.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
}

.footer{
  margin-top: 10%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #E5E7E9;
  position: relative;
}

.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

>>>>>>> 2a275bae66633a7f2dd0c22c48501e5c3361fa93
</style>
