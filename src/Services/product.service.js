import axios from "axios"
const apiUrl = import.meta.env.VITE_APIKEY

export const getProducts = () => axios.get (`${apiUrl}/items`) 
    
