<template>
  <div class="container">
    <div>
        <h1>VIDEOJUEGOS</h1>
    </div>
    <div v-show="mostrar">
        <h2> {{mensajeFinal}} </h2>
    </div>
    <label for="id_nombre">Nombre</label>
    <input id="id_nombre" v-model="nuevoNombre" type="text">
    <span v-if="mensaje.nombre">{{mensaje.nombre}}</span>

    <label for="id_tipo">Tipo</label>
    <input id="id_tipo" v-model="nuevoTipo" type="text">
    <span v-if="mensaje.tipo">{{mensaje.tipo}}</span>

    <label for="id_plataforma">Plataforma</label>
    <input id="id_plataforma" v-model="nuevaPlataforma" type="text">
    <span v-if="mensaje.plataforma">{{mensaje.plataforma}}</span>

    <label for="id_modo">Modo</label>
    <input id="id_modo" v-model="nuevoModo" type="text">
    <span v-if="mensaje.modo">{{mensaje.modo}}</span>

    <label for="id_empresa">Empresa</label>
    <input id="id_empresa" v-model="nuevaEmpresa" type="text">
    <span v-if="mensaje.empresa">{{mensaje.empresa}}</span>

    <button v-on:click="agregarVideojuego()">Guardar</button>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Plataforma</th>
          <th>Modo</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{nombre, tipo, plataforma, modo, empresa} in lista" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ tipo }}</td>
          <td>{{ plataforma }}</td>
          <td>{{ modo }}</td>
          <td>{{ empresa }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
 data() {
        return {
            nuevoNombre: null,
            nuevoTipo: null,
            nuevaPlataforma: null,
            nuevoModo: null,
            nuevaEmpresa: null,
            mensajeFinal: null,
            lista: [
                {nombre: 'GTA', tipo:'Accion', plataforma:'PC', modo:'Offline', empresa:'Rockstar'},
                {nombre: 'FIFA', tipo:'Deportes', plataforma:'PS5', modo:'Online', empresa:'EA Sports'},
                {nombre: 'Call of Duty', tipo:'Accion', plataforma:'XBOX', modo:'Offline', empresa:'Activision'},
                {nombre: 'Minecraft', tipo:'Aventura', plataforma:'PC', modo:'Offline', empresa:'Mojang'},  
              //  {nombre: 'Fortnite', tipo:'Accion', plataforma:'PS5', modo:'Online', empresa:'Epic Games'},
              //  {nombre: 'League of Legends', tipo:'Estrategia', plataforma:'PC', modo:'Online', empresa:'Riot Games'},        
            ],
            mostrar: false,
            nombreMensaje: false,
            tipoMensaje: false,  
            mensaje: {
                nombre: null,
                tipo: null,
                plataforma: null,
                modo: null,
                empresa: null
            }   
        }
    },
    methods: {
        agregarVideojuego(){
           if(this.validarEntradas()){
             const nuevo = {
                nombre: this.nuevoNombre,
                tipo: this.nuevoTipo,
                plataforma: this.nuevaPlataforma,
                modo: this.nuevoModo,
                empresa: this.nuevaEmpresa,
            }
            this.lista.push(nuevo);
            this.mostrarMensaje();
            this.mensajeFinal="Videojuego Guardado";
            this.limpiar();
           }
            
        },
        limpiar(){
            this.nuevoNombre= 'Nuevo Nombre',
            this.nuevoTipo= 'Nuevo Tipo',
            this.nuevaPlataforma= 'Nueva Plataforma',
            this.nuevoModo='Nuevo Modo',
            this.nuevaEmpresa='Nueva Empresa'
            this.mostrar= true,

            this.mensaje.nombre=null,
            this.mensaje.tipo=null,
            this.mensaje.plataforma=null,
            this.mensaje.modo=null,        
            this.mensaje.empresa=null;
        },
        mostrarMensaje(){
            setTimeout(()=>{
                this.mostrar=false;
            }, 2000);
            
           
        },
        validarEntradas(){

            try{
            /*let valida= this.mensaje.tipo.primero;*/
            let numero = 5;

            if(this.nuevoNombre==null){
                this.mensaje.nombre="Nombre es obligatorio";
                numero--;

            }
            if(this.nuevoTipo==null){
                this.mensaje.tipo="Tipo es obligatorio";
                numero--;

            }
            if(this.nuevaPlataforma==null){
                this.mensaje.plataforma="Plataforma es obligatorio";
                numero--;

            }
            if(this.nuevoModo==null){
                this.mensaje.modo="Modo es obligatorio";
                numero--;
             }
            if(this.nuevaEmpresa==null){
                this.mensaje.empresa="Empresa es obligatorio";
                numero--;
 
            }
            if(numero==5){
                return true;
            }else {
            return false;
            }
            }
            catch(error){
                console.error("Error ha ocurrido un problema")
                console.error(error);
                this.mostrar = true;
                this.mensajeFinal="Ha ocurrido un error en el sistema";
            }

        },
    },
};
</script>
   
<style scoped>
.container {
    background: #af7ac5;
    border: 1px solid #d1e3f8;
    border-radius: 16px;
    max-width: 900px;
    margin: 50px auto;
    padding: 40px 32px;
    box-shadow: 0 4px 16px rgba(60, 120, 216, 0.08);
}

label {
    display: block;
    color: #8509b9;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 4px;
    text-align: left;
}

input {
    background: #e3dde6;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #8509b9;
    width: 98%;
    margin-bottom: 12px;
    font-size: 16px;
    color: #2d3a4a;
    transition: border 0.2s;
}
input:focus {
    border: 1.5px solid #3c78d8;
    outline: none;
}

span {
    display: block;
}

button {
    background: #8509b9;
    color: #fff;
    padding: 8px 0;
    cursor: pointer;
    width: 150px;
    border-radius: 8px;
    border: none;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;

}
button:hover {
    background: #b107fa;
}

table {
    background: #9c55bb;
    width: 100%;
    border-collapse: collapse;
    margin-top: 32px;
    box-shadow: 0 2px 8px rgba(60, 120, 216, 0.06);
}
th, td {
    width: 20%;
    text-align: left;
    border: 1px solid #d1e3f8;
    padding: 0.7em;
    font-size: 15px;
}
th {
    background: #8409b9;
    color: #f0f3f7;
    font-weight: bold;
}
tr:nth-child(even) {
    background: #97bdee;
}
tr:hover {
    background: #d1e3f8;
}
</style>