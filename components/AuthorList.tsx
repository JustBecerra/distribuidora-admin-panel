import { DatagridConfigurable, List, Pagination, TextField } from "react-admin";
import React from "react";
import { ActionsList } from "./ActionsList";

export const AuthorList = () => {
  return (
    <List actions={<ActionsList />} pagination={<Pagination />}>
      <DatagridConfigurable rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="name" label="Nombre" />
        <TextField source="description" label="Descripción" />
        <TextField source="date_of_birth" label="Fecha de Nacimiento" />
      </DatagridConfigurable>
    </List>
  );
};
