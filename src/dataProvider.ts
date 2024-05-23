import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);

// import { stringify } from "querystring";
// import { DataProvider, fetchUtils } from "react-admin";

// const apiUrl = "http://localhost:3000";
// const httpClient = fetchUtils.fetchJson;

// export const dataProvider: DataProvider = {
//   getList: (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify(params.filter),
//     };
//     const url = `${apiUrl}/${resource}?${stringify(query)}`;

//     return httpClient(url).then(({ headers, json }) => ({
//       data: json,
//       total: parseInt(
//         (headers.get("content-range") || "0").split("/").pop() || "0",
//         10
//       ),
//     }));
//   },
// };
