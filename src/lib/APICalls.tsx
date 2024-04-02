import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export const APICreatePointer = async (point: any, code: string) => {
  try {
    const response = await axios.post("/api/point", { point, code });
    return { data: response.data };
  } catch (error) {
    console.error("Error al crear el pointer", error);
    return { data: null, error: "Error al crear el Pointer" };
  }
};

export const APICreateRealPointer = async (
  email: string,
  pointerName: string
) => {
  try {
    const response = await axios.post("/api/pointer", {
      email,
      pointerName,
    });
    return { data: response.data };
  } catch (error) {
    console.error(error);
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

export const APIGetPointInfo = async (code: string) => {
  try {
    const response = await axios.get(`/api/pointer?code=${code}`);
    console.log(response.data + " api");
    return { data: response.data };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error,
      message: "Error al obtener la información del point",
    };
  }
};

export const APICheckPointerCode = async (code: string) => {
  try {
    const response = await axios.post(`/api/checkPointer`, { code });
    return { data: response.data };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error,
      message: "Error, código inexistente",
    };
  }
};

export const APIFindByCategory = async (code: string, category: string) => {
  try {
    const response = await axios.post("/api/category", { code, category });
    return { data: response.data };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error,
      message: "Error al buscar por categoría",
    };
  }
};

export const APIDeletePointer = async (code: string) => {
  try {
    const response = await axios.delete(`/api/pointer?code=${code}`);
    return { data: response.data };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error,
      message: "Error al intentar eliminar el pointer",
    };
  }
};
