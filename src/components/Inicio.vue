//Template del formulario para crear usuario
<template>     
    <div id="CreateUser">
        <form id="form1" onsubmit="register()">
            
            <h2>Formulario de registro</h2><br>
            Nombre: <input type="text" name="name_user"> 
            &nbsp; Apellido: <input type="text" name="lastname_user"><br>
            <br>Número de Identificación: <input type="text" name="cc_user"><br>
            <br>Email: <input type="email" name="email_user"><br>
            <br>Teléfono/Celular : <input type="text" name="tel_user"><br>

            <br><button type="submit" >Registrar</button>
            
        </form>
    </div>
</template>