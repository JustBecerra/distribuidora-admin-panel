import React from "react";
import {
  Datagrid,
  DatagridConfigurable,
  DateField,
  List,
  Pagination,
  SearchInput,
  TextField,
  TextInput,
} from "react-admin";
import { ActionsList } from "./ActionsList";

const postFilters = [
  <SearchInput source="name" alwaysOn />,
  <TextInput label="Titulo" source="name" />,
];

export const BookList = () => (
  <List
    actions={<ActionsList />}
    filters={postFilters}
    pagination={<Pagination />}
  >
    <DatagridConfigurable>
      <TextField source="id" label="ID" />
      <TextField source="isbn" label="ISBN" />
      <TextField
        source="name"
        label="Título"
        sortable={true}
        style={{
          maxWidth: "50px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      />
      <TextField source="price" label="Precio" />
      <TextField
        source="tags"
        label="Genero"
        style={{
          maxWidth: "50px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      />
      <TextField source="available" label="Unidades Disponibles" />
      <TextField source="total_pages_number" label="Paginas" />
      <TextField source="size" label="Tamaño" />
      <TextField source="language" label="Idioma" />
      <DateField source="publication_date" label="Fecha de Publicación" />
      <TextField
        source="description"
        label="Descripción"
        cellClassName="truncate-text"
      />
    </DatagridConfigurable>
  </List>
);

const styles = `
  .truncate-text {
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

// Inject the styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
