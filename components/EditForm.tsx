import React from "react";
import {
  BooleanInput,
  DateInput,
  Edit,
  Form,
  ImageField,
  ImageInput,
  SaveButton,
  TextInput,
  useUpdate,
} from "react-admin";
import { Grid, Typography, Box } from "@mui/material";
export const EditForm = () => {
  const [update, { data, isLoading, error }] = useUpdate("libros");

  const postUpdate = () => {
    // update("libros", { id: record.id, data: diff, previousData: record });
    console.log(data);
  };
  return (
    <Edit title="Editar Libro" resource="Editar libro">
      <Typography fontSize="2rem" ml="1rem" mt="1rem" mb="1rem">
        Agregar Libro
      </Typography>
      <Box ml="1rem" width="100%">
        <Form onSubmit={postUpdate}>
          <Grid
            container
            spacing="16"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <TextInput source="name" label="Título" fullWidth isRequired />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="isbn" label="ISBN" fullWidth isRequired />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="price" label="Precio" fullWidth isRequired />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="tags" label="Género" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                source="available"
                label="Unidades Disponibles"
                fullWidth
                isRequired
              />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                source="total_pages_number"
                label="Páginas"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="size" label="Tamaño" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                source="language"
                label="Idioma"
                fullWidth
                isRequired
              />
            </Grid>
            <Grid item xs={6}>
              <DateInput
                label="Fecha de Publicación"
                source="publication_date"
                defaultValue={new Date()}
                fullWidth
                isRequired
              />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="weight" label="Peso" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                source="description"
                multiline={true}
                label="Descripción"
                fullWidth
                isRequired
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BooleanInput
                source="recommended"
                label="Libro recomendado"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <ImageInput
                source="image"
                label="Imagen"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageField source="src" title="title" />
              </ImageInput>
            </Grid>
          </Grid>
          <SaveButton style={{ marginBottom: "1rem" }} />
        </Form>
      </Box>
    </Edit>
  );
};
