import { fetchUtils } from "react-admin";
const apiUrl = "http://localhost:3000";

export const customDataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const url = `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;
    const response = await fetchUtils.fetchJson(url);
    const data = await response.json;

    return {
      data: data.data,
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: true,
      },
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
