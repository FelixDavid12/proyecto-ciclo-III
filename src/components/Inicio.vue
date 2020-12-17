//Template del formulario para crear usuario
<template>
    <div id="CreateUser">
        <!-- Load icon library -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <form id="form1" @submit="postData" methods="post">

            <h2>Formulario de registro</h2><br>
            Nombre: <input type="text" name="name" placeholder="name" v-model="user.name"><br>
            <br>Apellido: <input type="text" name="surname" placeholder="surname" v-model="user.surname"><br>
            <br>Número de Identificación: <input type="text" name="national_id" placeholder="national_id" v-model="user.national_id"><br>
            <br>Email: <input type="email" name="email" placeholder="email" v-model="user.email"><br>
            <br>Teléfono/Celular : <input type="text" name="phone" placeholder="phone" v-model="user.phone"><br>

            <br><button type="submit" >Registrar</button>

        </form>
        
        <form id="form2" @submit="getData" methods="get" style="height: 200px;">
            <h2>Buscar usuario</h2>
            <input type="text" placeholder="Buscar por nombre" name="userName" v-model="userName">
            <button type="submit"><i id="btn-search"></i>Buscar</button>
            <h3>{{this.user.name}}</h3>
            <h3>{{this.user.surname}}</h3>
            <h3>{{this.user.email}}</h3>
            <h3>{{this.error}}</h3>
        </form>

        
    </div>

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
      userName: "",
      error:"",
      user: {
        name: "",
        surname: "",
        national_id: null,
        email: "",
        phone: null
      }
    }
  },
  methods:{
    getData(e){
      axios.get('https://sprint-2-12.herokuapp.com/user/'+this.userName)
      .then(response => {
        this.user = response.data;
        if(this.user.name == undefined){
          this.error = "El usuario no existe";
        }else{
          this.error = "";
        }
      })
      .catch(function (error) {
        console.log('Error: ' + error);
      });
      e.preventDefault();
    },
    postData(e){
      console.log(this.user)
    
      this.axios.post("https://sprint-2-12.herokuapp.com/user/create/", {
        name: this.user.name,
        surname: this.user.surname,
        national_id: this.user.national_id,
        email: this.user.email,
        phone: this.user.phone
      })
      .then((result)=>{
        console.warn(result)
      })
      e.preventDefault();
    }
  }
}
</script>








<style scoped>
#CreateUser *{
    position: relative;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

#CreateUser #form1{
  background-color: #283747;
  color: #ffffff;
  padding: 3%;
  margin: 3%;
  font-size: 110%;
  width: 50%;
  border-radius: 5px;
}

#CreateUser #form1 input{
  outline: none;
  border: none;
  width: 100%;
  font-size: 110%;
  padding: 5px 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

#CreateUser #form1 button {
  border-radius: 10px;
  background-color: #3c99d7;
  color: #ffffff;
  padding: 2%;
  font-size: 1.2em;
  transition: all 0.5s ease;
  cursor: pointer;
}

#CreateUser #form1 button:hover {
  background-color: #9eb0e0;
}

#CreateUser #form2{
    background-color: #283747;
    color: #ffffff;
    font-size: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    position: absolute;
    top: 45%;
    left: 60%;
    height: 20px;
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}


#CreateUser #form2 input[type=text] {
  padding: 10px;
  font-size: 17px;
  color: white;
  /*border: 1px solid grey;*/
  border-radius: 20px;
  float: left;
  width: 80%;
  margin-right: 5px;
  background: transparent;
}
#CreateUser #form2 button {
  float: left;
  width: 35%;
  padding: 10px;
  margin-top: 5px;
  background: #2196F3;
  border-radius: 20px;

  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

#CreateUser #form2 button:hover {
  background-color: #9eb0e0;}

#CreateUser #form2::after {
  content: "";
  clear: both;
  display: table;
}
</style>
