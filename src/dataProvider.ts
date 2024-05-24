// import jsonServerProvider from "ra-data-json-server";

// export const dataProvider = jsonServerProvider(
//   import.meta.env.VITE_JSON_SERVER_URL
// );

import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:3000";
const httpClient = fetchUtils.fetchJson;

export const customDataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const queryString = Object.keys(query)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
      )
      .join("&");
    const url = `${apiUrl}/${resource}?${queryString}`;

    return httpClient(url)
      .then(({ headers, json }) => {
        if (!headers.has("content-range")) {
          throw new Error("Content-Range header missing in response");
        }

        const contentRange = headers.get("content-range");
        const total = contentRange
          ? parseInt(contentRange.split("/").pop(), 10)
          : 0;

        if (isNaN(total)) {
          throw new Error("Invalid Content-Range header format");
        }

        return {
          data: json,
          total: total,
        };
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw new Error("Error fetching data from the server");
      });
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
