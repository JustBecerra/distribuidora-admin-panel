import React from "react";
import { Datagrid, List, TextField } from "react-admin";

export const BookList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="ISBN" />
      <TextField source="Título" />
      <TextField source="Precio" />
      <TextField source="Autor" />
      <TextField source="Genero" />
      <TextField source="Etiqueta" />
      <TextField source="Editorial" />
      <TextField source="Paginas" />
      <TextField source="Tamaño" />
      <TextField source="Peso" />
      <TextField source="Idioma" />
      <TextField source="fecha_publicacion" />
      <TextField source="sinopsis" />
      <TextField source="recomendado" />
      <TextField source="imagen_portada" />
    </Datagrid>
  </List>
);
