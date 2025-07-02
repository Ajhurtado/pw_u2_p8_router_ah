<template>
  <div class="container-boton">
    <button v-on:click="consumirAPI()">CONSULTAR ESTUDIANTES</button>
  </div>
  <div class="container">   
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de Nacimiento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="{ id, nombre, apellido, fechaNacimiento } in lista" :key="nombre">
                <td>{{ id }}</td>
                <td>{{ nombre }}</td>
                <td>{{ apellido }}</td>
                <td>{{ fechaNacimiento  }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

import { consultarMatriculaDatosFachada } from "@/clients/MatriculaClient.js";

export default {
    data(){
        return {
            lista: [],
        };
    },
    methods: {
        async consumirAPI(){
            this.lista = await consultarMatriculaDatosFachada();
            console.log(this.lista);
        },
    },
}
</script>

<style scoped>
.container {
    background: rgb(218, 187, 223);
    border: 1px solid black;
    border-radius: 12px;
    max-width: 900px;
    margin: 50px auto;
    padding: 50px;
}

button {
    background-color: #6c47a6;
    color: #fff;
    padding: 12px 20px; 
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    width: 210px;

}

table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    margin-top: 30px;
}

th, td {
    padding: 16px 12px;
    text-align: left;
}

th {
    background: #6c47a6;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 2px solid #a98ed6;
}

tbody tr:nth-child(even) {
    background: #f3eafd;
}

tbody tr:hover {
    background: #e0d1f7;
}

td {
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #e0d1f7;
}

</style>