<template>
  <div id="app">
    <div class="header">
      <h1>Sprint 3</h1>
      <nav>
        <button v-on:click="init">Inicio</button>
        <button v-on:click="users">Usuarios</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="footer">
      <h2>©Equipo15 - G1M2</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    init: function () {
      if (this.$route.name !== "inicio") {
        this.$router.push({name: "inicio"})
      }
    },
    users: function () {
      if (this.$route.name !== "user_listado") {
        this.$router.push({name: "user_listado"})
      }
    }
  },
  beforeCreate: function(){
    this.$router.push({name:"inicio"})
  }
}
</script>

<style>
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
  height: 60vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
}

.footer{
  margin-top: 20%;
  /*bottom: 0;*/
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

button {
  outline: none;
}

</style>
