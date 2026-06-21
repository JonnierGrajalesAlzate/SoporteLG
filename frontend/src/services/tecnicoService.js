import axios from "axios";

const API_URL = "http://localhost:3000/api/tecnico";

export const getMisTicketsTecnico = async (tecnicoId) => {

    const response = await axios.get(
        `${API_URL}/mis-tickets/${tecnicoId}`
    );

    return response.data;
};