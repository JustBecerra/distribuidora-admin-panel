import React from "react";
import {
  BooleanField,
  DateField,
  ImageField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const ShowBook = (props) => {
  const { basePath, resource } = props;
  return (
    <Show basePath={basePath} resource={resource} {...props}>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="isbn" label="ISBN" />
        <TextField
          source="name"
          label="Título"
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
          label="Género"
          style={{
            maxWidth: "50px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        />
        <BooleanField source="recommended" label="Recomendado" />
        <TextField source="available" label="Unidades Disponibles" />
        <TextField source="total_pages_number" label="Páginas" />
        <TextField source="size" label="Tamaño" />
        <TextField source="weight" label="Peso" />
        <TextField source="language" label="Idioma" />
        <DateField source="publication_date" label="Fecha de Publicación" />
        <ImageField source="image" label="Imagen" />
        <TextField
          source="description"
          label="Descripción"
          cellClassName="truncate-text"
        />
      </SimpleShowLayout>
    </Show>
  );
};
