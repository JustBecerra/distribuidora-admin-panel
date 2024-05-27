import { fetchUtils } from "react-admin";
const apiUrl = "http://localhost:3000";

export const customDataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const url = `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;
    const response = await fetchUtils.fetchJson(url);
    const data = await response.json;

    // Calculo el principio y final de la pagina actual
    const start = (page - 1) * perPage;
    const end = page * perPage;

    // corto la data en menores cantidades para renderizar en la pagina actual
    const paginatedData = data.slice(start, end);

    return {
      data: paginatedData,
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: true,
      },
      // total: parseInt(response.headers.get("x-total-count") || "1", 10),
    };
  },
  getOne: (resource: string, params: any) => {
    return Promise.resolve({ data: null });
  },
  getMany: (resource: string, params: any) => {
    return Promise.resolve({ data: [] });
  },
  getManyReference: (resource: string, params: any) => {
    return Promise.resolve({ data: [] });
  },
  update: (resource: string, params: any) => {
    return Promise.resolve({ data: null });
  },
  create: (resource: string, params: any) => {
    return Promise.resolve({ data: null });
  },
  delete: (resource: string, params: any) => {
    return Promise.resolve({ data: null });
  },
  updateMany: (resource: string, params: any) => {
    return Promise.resolve({ data: [] });
  },
  deleteMany: (resource: string, params: any) => {
    return Promise.resolve({ data: [] });
  },
};
