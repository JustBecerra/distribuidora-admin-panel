import React from "react";
import {
  BooleanInput,
  Create,
  DateInput,
  Form,
  ImageField,
  ImageInput,
  SaveButton,
  TextInput,
  useCreate,
  useNotify,
} from "react-admin";
import { Grid, Typography, Box } from "@mui/material";
export const CreateForm = () => {
  const [create] = useCreate();
  const notify = useNotify();
  // const redirect = useRedirect();
  const postSave = (data) => {
    create("libros", { data });
    notify(`Libro agregado correctamente`);
    // redirect("/librosfiltrados");
  };
  return (
    <Create title="Agregar Libro" resource="Agregar libro">
      <Typography fontSize="2rem" ml="1rem" mt="1rem" mb="1rem">
        Agregar Libro
      </Typography>
      <Box ml="1rem" width="100%">
        <Form onSubmit={postSave}>
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
    </Create>
  );
};
