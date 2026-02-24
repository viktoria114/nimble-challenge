import axios from "axios";
import { api } from "./connection";

export const getCandidateByEmail = async (email) => {
  try {
    const res = await api.get(`/candidate/get-by-email?email=${email}`);
    console.log(res.data);
    
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(
       err.response?.data?.message || "Error al obtener información por su correo electrónico " 
      );
    }
    throw err;
  }
};

export const postApplyToJob = async (body) => {
  try {
    const res = await api.post(`/candidate/apply-to-job`, body);
        console.log(res.data);

    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
    console.log(body);

        throw new Error(err.response?.data?.message || "Error al aplicar a un trabajo");
    
    }
    throw err;
    
  }
};
