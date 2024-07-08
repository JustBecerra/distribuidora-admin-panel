import {
  DatagridConfigurable,
  List,
  Pagination,
  SearchInput,
  TextField,
  TextInput,
} from "react-admin";
import React from "react";
import { ActionsList } from "./ActionsList";

const postFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Título" source="name" />,
];

export const GenderList = () => {
  return (
    <List
      actions={<ActionsList resource={"generos"} />}
      filters={postFilters}
      pagination={<Pagination />}
    >
      <DatagridConfigurable rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="name" label="Nombre" />
        <TextField source="description" label="Descripción" />
      </DatagridConfigurable>
    </List>
  );
};
