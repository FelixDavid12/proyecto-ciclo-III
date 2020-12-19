//Template del formulario para crear usuario
<template>
  <div class="UserListado">
    <!-- Load icon library -->

    <div class="search_container"></div>
        <div class="search_container_logo">
            <h2>User Hotel <span>¡Bienvenido!</span></h2>
        </div>
    <div class="search_container_btn">
        <button>Listar todos</button>
    </div>
    <div class="result_container"></div>
        <div class="resul_container_json">
            <p id="result_json">pass</p>
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
    grid-area: 2 / 2 / 4 / 4;
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
    max-height: 50px;
}

.search_container_btn button{
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

.search_container_btn button:hover{
      background-color: #9eb0e0;
}

.result_container {
  grid-area: 1 / 5 / 6 / 9;
  height: 85vh;
  width: 100%;
  display: flex;
    
}
.resul_container_json {
  grid-area: 2 / 6 / 5 / 8;
  background-color: #283747;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 120%;
}

.resul_container_json p{
    color: white;
}
</style>
