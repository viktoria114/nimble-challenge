import axios from "axios";
import { api } from "./connection";

export const getJobs = async () => {
  try {
    const res = await api.get(`/jobs/get-list`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(
        err.response?.data?.message || "Error al obtener lista de trabajos",
      );
    }
    throw err;
  }
};
