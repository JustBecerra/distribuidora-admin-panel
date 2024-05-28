import React from "react";
import { Create, DateInput, Form, SaveButton, TextInput } from "react-admin";
import { Grid, Typography, Box } from "@mui/material";
export const CreateForm = () => {
  return (
    <Create title="Agregar Libro" resource="Agregar libro">
      <Typography fontSize="2rem" ml="1rem" mt="1rem" mb="1rem">
        Nuevo Libro
      </Typography>
      <Box ml="1rem" width="60%">
        <Form>
          <Grid
            container
            spacing="16"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <TextInput source="name" label="Título" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="isbn" label="ISBN" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="price" label="Precio" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextInput source="tags" label="Género" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                source="available"
                label="Unidades Disponibles"
                fullWidth
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
              <TextInput source="language" label="Idioma" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <DateInput
                label="Fecha de Publicación"
                source="publication_date"
                defaultValue={new Date()}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                source="description"
                multiline={true}
                label="Descripción"
                fullWidth
              />
            </Grid>
          </Grid>
          <SaveButton style={{ marginBottom: "1rem" }} />
        </Form>
      </Box>
    </Create>
  );
};
