import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export const APICreatePointer = async (point: any) => {
  try {
    const response = await axios.post("/api/point", { point });
    return { data: response.data };
  } catch (error) {
    console.error("Error al crear el pointer", error);
    return { data: null, error: "Error al crear el Pointer" };
  }
};

export const APIGetMyPoints = async (email: string) => {
  try {
    const response = await axios.get(`api/getMyPointsCreated?email=${email}`);
    return { data: response.data };
  } catch (error) {
    console.error(
      "Error al obtener los points del usuario, o email inexistente",
      error
    );
    return {
      data: null,
      error: "Error al obtener los points del usuario, o email inexistente",
    };
  }
};
