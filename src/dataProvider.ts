import { fetchUtils } from "react-admin";
const apiUrl = "http://localhost:3000";

export const customDataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const { q, name } = params.filter;

    const url = new URL(`${apiUrl}/${resource}`);
    url.searchParams.append("_page", page);
    url.searchParams.append("_limit", perPage);
    url.searchParams.append("_sort", field);
    url.searchParams.append("_order", order);

    //si el filtro por nombre es utilizado, se agregan a la URL
    if (q) {
      url.searchParams.append("q", q);
    }
    if (name) {
      url.searchParams.append("name", name);
    }

    const response = await fetchUtils.fetchJson(url.toString());
    const data = await response.json;

    return {
      data: data.data ? data.data : data,
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
