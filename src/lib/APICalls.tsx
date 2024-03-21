import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export const createList = async ({
  name,
  creatorEmail,
  category,
  items,
}: any): Promise<ApiResponse<string>> => {
  try {
    const response: AxiosResponse<string> = await axios.post("/api/list", {
      name,
      creatorEmail,
      category,
      items,
    });

    return { data: response.data };
  } catch (error) {
    console.error("Error en la llamada API para crear la lista:", error);
    return { data: null, error: "Error al crear la lista" };
  }
};

export const APICreatePointer = async ({
  creator,
  participants,
  points,
}: any) => {
  try {
    const response = await axios.post("/api/point", {
      creator,
      participants,
      points,
    });
    console.log({
      data: response.data,
    });
    return { data: response.data };
  } catch (error) {
    console.error("Error al crear el pointer", error);
    return { data: null, error: "Error al crear el Pointer" };
  }
};
