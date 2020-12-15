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
    </div>
</template>








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
