<<<<<<< HEAD
<template>
    <div id="User">
        <h1> {{ msg }}}</h1>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
        
        <!-- Contenedor de ventana -->
        <div class="grid_container">
        <!-- Componente de busqueda de usuario -->
        <section class="search_container">
            <legend>Buscar usuario</legend>
            <div class="search_user_entry">
                <input type="text" placeholder="Buscar por nombre">
                <button v-on:click="search()" class="btn-primary">Buscar</button>
            </div>
        </section>
        

        <!-- Formulario de creación de usuario -->
        <section class="form_container">
            <div class="form_container_entry">
                <form>
                    <legend>Crear usuario</legend>
                    <div>
                        <input type="text" name="first_name" placeholder="Nombres" v-model="username" required>
                    </div>
                    <div>
                        <input type="text" name="last_name" placeholder="Apellidos" v-model="surname" required>
                    </div>
                    <div>
                        <input type="number" name="id_document" placeholder="Documento de identidad" v-model="id_document" required>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Correo electrónico" v-model="email" required>
                    </div>
                    <div>
                        <input type="tel" name="telephone" placeholder="Número de teléfono" v-model="tel_number" required>
                    </div>
                    <div class="register_button">
                        <hr/>
                        <button v-on:click="authenticate()" class="btn-secondary">Registrar</button>
                        <hr/>
                        <p>¿Ya tiene una cuenta? - Buscar usuario</p> 
                    </div>
                </form>
            </div>
        </section>
        
        </div>
=======
//Template del formulario para crear usuario
<template>
    <div id="CreateUser">
        <form id="form1" onsubmit="register()">

            <h2>Formulario de registro</h2><br>
            Nombre: <input type="text" name="name_user"><br>
            <br>Apellido: <input type="text" name="lastname_user"><br>
            <br>Número de Identificación: <input type="text" name="cc_user"><br>
            <br>Email: <input type="email" name="email_user"><br>
            <br>Teléfono/Celular : <input type="text" name="tel_user"><br>

            <br><button type="submit" >Registrar</button>

        </form>
>>>>>>> 2a275bae66633a7f2dd0c22c48501e5c3361fa93
    </div>
</template>



<<<<<<< HEAD
<script>
    export default {
        name: "Inicio",
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },

        /*created: function(){
            this.username = this.$route.params.username
        }*/
    }
</script>


<style>
    template{
    font-family: 'Quicksand', sans-serif;
}

.grid_container {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    }
    
    .search_container {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        grid-area: 1 / 1 / 8 / 5; 
    }
    .search_user_entry { grid-area: 4 / 2 / 5 / 4; 
        width: 60%;
        padding: 10px 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

    }

    .search_user_entry input{
        width: 300px;
        padding: 5px;
    }

    .form_container { 
        
        grid-area: 1 / 5 / 8 / 9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center; 
    }
    
    .form_container_entry { 
        grid-area: 2 / 6 / 7 / 8; 
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center; 
    }

    .form_container_entry form{
        text-align: center;
    }

    .form_container_entry form input{
        width: 300px;
        padding: 5px;
        margin: 5px;
    }

    .btn-secondary{
        width: 300px;
        padding: 5px;
    }

</style>
=======





<style scoped>
#CreateUser *{
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

</style>
>>>>>>> 2a275bae66633a7f2dd0c22c48501e5c3361fa93
