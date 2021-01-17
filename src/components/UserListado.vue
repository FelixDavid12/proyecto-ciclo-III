//Template del formulario para crear usuario
<template>
<!--  <div id="app">-->
    <div class="UserListado">
    <!-- Load icon library -->

      <div class="search_container"></div>

          <div class="search_container_logo1">
            <h2>User Hotel</h2>
          </div>

          <div class="search_container_logo2" v-on:click="getUsuarios">
            <h2>Conoce nuestros Usuarios</h2>
            <img src="@/assets/usuario.png" width="65px" height="65px" alt="Imagen1">
          </div>

      <div class="search_container_btn">
       <button v-on:click="getUsuarios">Listar Usuarios</button>
      </div>

      <div class="result_container"></div>
        <div class="resul_container_json">
          <ul id="example-1">
            <li v-for="item in users">
            <br>
              Name: {{ item.name}} <br>
              Surname: {{ item.surname}} <br>
              National id: {{ item.national_id}}<br>
              Email: {{ item.email}}<br>
              Phone: {{ item.phone}}<br>
            </li>
          </ul>
        </div>

    </div>
<!--  </div>-->
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
  name: 'PostForm',
  data() {
    return {
      error:"",
      users: [],
    }
  },

  methods: {
    getUsuarios(e){
      this.users = [];
      axios.get('https://sprint-2-12.herokuapp.com/users/')
      .then(response => {
        var obj = response.data;
        for (let user of Object.keys(obj)) {
          var info = obj[user];
          this.users.push(info);
        }
      })
      .catch(function (error) {
        console.log('Error: ' + error);
      });
      e.preventDefault();
    },
  }
}
</script>


<style scoped>
.UserListado{
  background:white;
  display: grid;
  /*grid-template-columns: 1fr 6fr 1fr;*/
  /*grid-template-rows: 1fr 0.5fr 0.5fr 4fr 0.5fr 1fr;*/
  /*position: relative;*/
}

.search_container{
  grid-area: 1 / 1 / 2 / 4;
  background-color: white;
}
.search_container_logo1{
  grid-area: 2 / 1 / 3 / 4;
  background-color:white;
  display: flex;
  justify-content: center;
}

.search_container_logo2{
  grid-area: 3 / 2 / 4 / 3;
  background-color: #3c99d7;
  border: 2px solid rgb(10, 10, 10);
  border-radius: 5px;
  display: flex;
  justify-content: center;
}

.search_container_logo1 h2{
  display: flex;
  justify-content: center;
  color: #283747;
  font-size: 30pt;
}

.search_container_logo2 h2{
  color:black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15pt;
}

.search_container_logo2 img{
  padding: 0px;
  margin-left: 540px;
}

.resul_container_json{
  display: flex;
  overflow-y: scroll;
  grid-area: 4 / 2 / 5 / 3;
  background-color: #283747;

  border: 2px solid rgb(10, 10, 10);
  border-radius: 0px;

  font-size: 100%;
  color: white;
  min-height: 400px;
  max-height: 400px;
  justify-content: center;

}

.resul_container_json p{
  color: white;
}

.search_container_btn {
  grid-area: 5 / 2 / 6 / 3;
  display: flex;
  justify-content: center;
  align-content: center;
  max-height: 80px;
  /*max-width: auto;*/
}

.search_container_btn button{
    width: 20%;
    padding: 0px;
    margin-top: 25px;
    background: #2196F3;
    border-radius: 50px;
    color: white;
    font-size: 18px;
    border: 1px solid gray;
    border-left: none; /* Prevent double borders*/
    cursor: pointer;
    font-family: "Verdana";
}

.search_container_btn button:hover{
      background-color: #9eb0e0;
}

.result_container{
  grid-area: 6 / 1 / 7 / 4;
  background-color: white;
}


</style>
