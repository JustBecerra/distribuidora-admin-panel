import React from "react";
import { Datagrid, DateField, List, Pagination, TextField } from "react-admin";

export const BookList = () => (
  <List perPage={20} pagination={<Pagination />}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="isbn" label="ISBN" />
      <TextField source="name" label="Título" />
      <TextField source="price" label="Precio" />
      <TextField source="tags" label="Genero" />
      <TextField source="available" label="Unidades Disponibles" />
      <TextField source="total_pages_number" label="Paginas" />
      <TextField source="size" label="Tamaño" />
      <TextField source="weight" label="Peso" />
      <TextField source="language" label="Idioma" />
      <DateField source="publication_date" label="Fecha de Publicación" />
      <TextField
        source="description"
        label="Descripción"
        style={{
          maxWidth: "50px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      />
    </Datagrid>
  </List>
);
