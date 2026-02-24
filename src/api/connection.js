import axios from "axios";

export const api = axios.create({
  baseURL: "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});