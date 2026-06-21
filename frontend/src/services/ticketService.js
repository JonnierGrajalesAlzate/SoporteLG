import axios from "axios";

const API_URL = "http://localhost:3000/api/tickets";

export const crearTicket = async (ticketData) => {

    const response = await axios.post(
        API_URL,
        ticketData
    );

    return response.data;
};