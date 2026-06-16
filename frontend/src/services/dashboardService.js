import axios from "axios";

const API_URL = "http://localhost:3000/api/dashboard";

export const getDashboard = async (usuarioId) => {

    const response = await axios.get(
        `${API_URL}/${usuarioId}`
    );

    return response.data;
};