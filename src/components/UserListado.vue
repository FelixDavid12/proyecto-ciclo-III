//Template del formulario para crear usuario
<template>
  <div id="app">
    <div class="UserListado">
    <!-- Load icon library -->

      <div class="search_container"></div>
          <div class="search_container_logo">
            <h2> &nbsp;&nbsp;User Hotel<br>
            <span>¡Bienvenido!</span></h2>
          </div>
      
      <div class="search_container_btn">
        <button>Listar Usuarios</button>
      </div>
      
      <div class="result_container"></div>
        <div class="resul_container_json">
            <p id="result_json">Usuarios</p>
        </div>
    
    </div>
  </div>
</template>







<style scoped>
.UserListado {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}
.search_container {
  grid-area: 1 / 1 / 6 / 5;
  height: 85vh;
  width: 100%;
}
.search_container_logo {
    grid-area: 3 / 2 / 4 / 4;
    background-color: #283747;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 120%;
}
.search_container_logo h2{
    color: white;
}
.search_container_logo span{
    color: red;
}
.search_container_btn {
  grid-area: 4 / 2 / 5 / 4;
  display: flex;
  justify-content: center;
  align-content: center;
  max-height: 80px;
  max-width: auto;
  
}
.search_container_btn button{
    width: 60%;
    padding: 0px;
    margin-top: 25px;
    background: #2196F3;
    border-radius: 50px;
    color: white;
    font-size: 18px;
    border: 1px solid gray;
    border-left: none; /* Prevent double borders*/
    cursor: pointer;
    font: "Verdana";
    font-weight : bold;
}
.search_container_btn button:hover{
      background-color: #9eb0e0;
}
.result_container {
  grid-area: 1 / 5 / 6 / 9;
  height: 90vh;
  width: 100%;
  display: flex;
    
}
.resul_container_json {
  grid-area: 2 / 5 / 5 / 8;
  background-color: #ececec;
  border: 2px solid rgb(10, 10, 10);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 120%;
  font: "Verdana";
}
.resul_container_json p{
    color: black;
    font: "Verdana", bold;
}


</style>
