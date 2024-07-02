import {
  BooleanField,
  DatagridConfigurable,
  DateField,
  List,
  Pagination,
  SearchInput,
  TextField,
  TextInput,
} from "react-admin";
import { ActionsList } from "./ActionsList";

const postFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Título" source="name" />,
];

export const BookList = () => (
  <List
    actions={<ActionsList resource="libros" />}
    filters={postFilters}
    pagination={<Pagination />}
  >
    <DatagridConfigurable rowClick="show">
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
      <TextField source="image" label="Imagen" />
      <TextField
        source="description"
        label="Descripción"
        cellClassName="truncate-text"
      />
    </DatagridConfigurable>
  </List>
);

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
