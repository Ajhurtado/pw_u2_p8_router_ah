import axios from "axios";

const consultarMatriculaDatos = async () => {
    const respuesta = await axios.get("http://localhost:8081/api/matricula/v1/estudiantes");
    return respuesta.data; // Array de estudiantes
};

export const consultarMatriculaDatosFachada = async () => {
    return await consultarMatriculaDatos();
};

const consultarEstudiantePorId = async (id) => {
        const response = await axios.get(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`);
        return response.data;
};

export const consultarEstudiantePorIdFachada = async (id) => {
    return await consultarEstudiantePorId(id);
};