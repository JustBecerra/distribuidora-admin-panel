import { fetchUtils } from "react-admin";
const apiUrl = "http://localhost:3000";

export const customDataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const response = await fetchUtils.fetchJson(
      `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}&_sorts=${field}&_order=${order}`
    );

    return {
      data: response.json,
      total: parseInt(response.headers.get("x-total-count") || "", 10),
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
