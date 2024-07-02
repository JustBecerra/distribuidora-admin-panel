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
  <TextInput label="Nombre" source="name" />,
];

export const EditorialList = () => {
  return (
    <List
      actions={<ActionsList resource="editoriales" />}
      pagination={<Pagination />}
      filters={postFilters}
    >
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

// Inject the styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
