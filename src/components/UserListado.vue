//Template del formulario para crear usuario
<template>
    <div id="CreateUser">
        <!-- Load icon library -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
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
    top: 36%;
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
