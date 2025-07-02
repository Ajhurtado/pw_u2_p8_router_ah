<template>
  <div class="container-buscar">
    <p>Buscar estudiante</p>
    <label for="id">ID del Estudiante:</label>
    <input type="number" v-model="idEstudiante" placeholder="Ingrese ID del estudiante" />
    <button v-on:click="buscarEstudiante()" >BUSCAR</button>
  </div>
  <div class="container">
    <h3>Datos del Estudiante</h3>
    <label for="id">ID:</label>
    <input v-model="id" id="id" type="text" readonly>

    <label for="nombre">Nombre:</label>
    <input v-model="nombre" id="nombre" type="text" readonly >

    <label for="apellido">Apellido:</label>
    <input v-model="apellido" id="apellido" type="text" readonly>

    <label for="fechaNacimiento">Fecha de Nacimiento:</label>
    <input v-model="fechaNacimiento" id="fechaNacimiento" type="text" readonly >
  </div>
</template>

<script>
import { consultarEstudiantePorIdFachada } from "@/clients/MatriculaClient.js";

export default {
  data() {
    return {
      idEstudiante: "",
      estudiante: null,
      id: "",
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
    };
  },
  methods: {
    async buscarEstudiante() {
        const data = await consultarEstudiantePorIdFachada(this.idEstudiante);
        this.estudiante = data;
        this.id = data.id;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.fechaNacimiento = data.fechaNacimiento;
        console.log(this.estudiante);
    },
  },
};
</script>

<style scoped>
.container {
    background: rgb(218, 187, 223);
    border: 1px solid #6c47a6;
    border-radius: 12px;
    max-width: 900px;
    margin: 50px auto;
    padding: 50px;
    box-shadow: 0 4px 16px rgba(108,71,166,0.10);
}

.container-buscar {
    background: #f3eafd;
    border: 1px solid #a98ed6;
    border-radius: 10px;
    max-width: 900px;
    margin: 30px auto 0 auto;
    padding: 30px 50px 20px 50px;
    box-shadow: 0 2px 8px rgba(108,71,166,0.08);
}

p{
    color: #6c47a6;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
label {
    display: block;
    text-align: left;
    color: #6c47a6;
    font-weight: bold;
    margin-bottom: 6px;
    margin-top: 10px;
}

input {
    background: #f3eafd;
    color: #6c47a6;
    width: 98%;
    border-radius: 8px;
    margin-bottom: 18px;
    border: 1px solid #a98ed6;
    padding: 10px 15px;
    font-size: 16px;
    transition: border 0.2s;
}

input:focus {
    border: 2px solid #6c47a6;
    outline: none;
    background: #fff;
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
    margin-top: 10px;

}

button:hover {
    background-color: #4e2c7a;
}

h3 {
    color: #6c47a6;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
}
</style>