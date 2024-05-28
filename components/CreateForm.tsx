import React from "react";
import { Create, DateInput, SimpleForm, TextInput } from "react-admin";

export const CreateForm = () => {
  return (
    <Create title="Agregar libro" resource="Agregar libro">
      <SimpleForm>
        <TextInput source="name" label="Título" />
        <TextInput source="isbn" label="ISBN" />
        <TextInput source="price" label="Precio" />
        <TextInput source="tags" label="Género" />
        <TextInput source="available" label="Unidades Disponibles" />
        <TextInput source="total_pages_number" label="Páginas" />
        <TextInput source="size" label="Tamaño" />
        <TextInput source="language" label="Idioma" />
        <DateInput
          label="Fecha de Publicación"
          source="publication_date"
          defaultValue={new Date()}
        />
        <TextInput source="description" multiline={true} label="Descripción" />
      </SimpleForm>
    </Create>
  );
};
