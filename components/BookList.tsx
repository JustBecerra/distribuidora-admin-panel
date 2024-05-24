import React from "react";
import { Datagrid, List, TextField } from "react-admin";

export const BookList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="isbn" />
      <TextField source="name" />
      <TextField source="price" />
      <TextField source="tags" />
      <TextField source="available" />
      <TextField source="total_pages_number" />
      <TextField source="size" />
      <TextField source="weight" />
      <TextField source="language" />
      <TextField source="publication_date" />
      <TextField source="description" />
      <TextField source="recommended" />
      <TextField source="image" />
    </Datagrid>
  </List>
);
