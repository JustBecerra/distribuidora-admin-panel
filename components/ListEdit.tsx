import React from "react";
import { Edit, FileField, FileInput, SimpleForm } from "react-admin";

export const ListEdit = () => (
  <Edit>
    <SimpleForm>
      <FileInput source="attachments">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
