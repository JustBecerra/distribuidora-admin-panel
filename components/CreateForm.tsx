import React from "react";
import {
  Create,
  DateInput,
  Form,
  SaveButton,
  TextInput,
  useCreate,
} from "react-admin";
import { Grid, Typography, Box } from "@mui/material";
export const CreateForm = () => {
  const [create] = useCreate();
  const postSave = (data) => {
    create("libros", { data });
  };
  return (
    <Create title="Agregar Libro" resource="Agregar libro">
      <Typography fontSize="2rem" ml="1rem" mt="1rem" mb="1rem">
        Agregar Libro
      </Typography>
      <Box ml="1rem" width="60%">
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
              <TextInput
                source="description"
                multiline={true}
                label="Descripción"
                fullWidth
                isRequired
              />
            </Grid>
          </Grid>
          <SaveButton style={{ marginBottom: "1rem" }} />
        </Form>
      </Box>
    </Create>
  );
};
