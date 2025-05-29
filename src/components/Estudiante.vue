<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" >
   
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" >

    <label for="id_edad">Edad:</label>
    <input v-model="nuevaEdad" id="id_edad" type="number" >

    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" id="id_genero" type="text" >

    <label for="id_estado">Estado:</label>
    <input v-model="nuevoEstado" id="id_estado" type="text" >


    <button v-on:click="agregarEstudiante()" >Agregar</button>
    <button v-on:click="optenerPathVariable()" >Obtener</button>
    <!--{{ nuevoNombre }}-->
    <ul>
       <!-- <li v-for="estu in lista" :key="estu.nombre"> Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}</li> -->
        <li v-for="{ nombre, apellido, edad, genero, estado} in lista" :key="nombre">
             Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} - Genero: {{ genero }} - Estado: {{ estado }}</li>
       
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            //propiedad reactiva para el nombre
            nuevoNombre: "Nuevo",
            nuevoApellido: "Nuevo",
            nuevaEdad: "Nuevo",
            nuevoGenero: "Nuevo",
            nuevoEstado: "Nuevo",
            //propiedad reactiva de tipo arreglo
            lista: [{nombre:'Alexis',apellido:'Hurtado'},
                    {nombre:'Juan',apellido:'Pérez'},
                    {nombre:'Pedro',apellido:'Gómez'},
                    {nombre:'María',apellido:'López'},
                    {nombre:'Ana',apellido:'Martínez'},
                    {nombre:'Luis',apellido:'Fernández'},
                    {nombre:'Jose',apellido:'Ramirez'},          
                    
                    ],
        };
    },
    //metodos
    methods: {
        agregarEstudiante(){
            const nuevo= {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
                edad: this.nuevaEdad,
                genero: this.nuevoGenero,
                estado: this.nuevoEstado,
            }
            //agregar un nuevo estudiante a la lista
            //this.lista.unshift(nuevo);
            this.lista.push(nuevo);
        },
    },
    
    methods: {
      optenerPathVariable(){
        const cedula = this.$route.params.cedula;
        console.log(cedula);

        const anio = this.$route.query.anio;
        console.log(anio)
        const mes = this.$route.query.mes;
        console.log(mes)
      }
    }
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

label {
    display: block;
    color: #333;
    text-align: left;
}

input {
    background: #4e91f9;
    color: #fff;
    width: 98%;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px 15px;
    
}

button {
    background-color: #4e91f9;
    color: #fff;
    padding: 12px 20px; 
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    width: 210px;

}

ul {
    list-style: none;
    margin-top: 50px;
}

li {
    background: #8fb7f3;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 15px;
    color: #333;
    font-size: 18px;
}

</style>