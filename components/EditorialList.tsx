import { DatagridConfigurable, List, Pagination, TextField } from "react-admin";
import React from "react";
import { ActionsList } from "./ActionsList";

export const EditorialList = () => {
  return (
    <List actions={<ActionsList />} pagination={<Pagination />}>
      <DatagridConfigurable rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="name" label="Nombre" />
        <TextField
          source="description"
          label="Descripción"
          cellClassName="truncate-text"
        />
        <TextField source="image" label="Nombre de archivo" />
      </DatagridConfigurable>
    </List>
  );
};

const styles = `
  .truncate-text {
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
