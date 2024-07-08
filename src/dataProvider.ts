import { fetchUtils } from "react-admin";
// const apiUrl = "http://localhost:3000";
const apiUrl = "https://backend-distribuidora-p5f1.vercel.app";
const httpClient = fetchUtils.fetchJson;
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
      data: data.data || data,
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: true,
      },
    };
  },
  getOne: async (resource: string, params: any) => {
    const { id } = params;
    const url = new URL(`${apiUrl}/libros/${id}`);

    const response = await fetchUtils.fetchJson(url.toString());
    const data = await response.json;
    return {
      data,
    };
  },
  getMany: (resource: string, params: any) => {
    return Promise.resolve({ data: [] });
  },
  getManyReference: (resource: string, params: any) => {
    return Promise.resolve({ data: [] });
  },
  update: async (resource: string, params: any) => {
    const { data, id } = params;
    const url = new URL(`${apiUrl}/libro/${id}`);

    const response = await fetchUtils.fetchJson(url.toString(), {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const json = await response.json;

    return {
      data: { ...data, id: json.id },
    };
  },
  create: (resource: string, params: any) => {
    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
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
