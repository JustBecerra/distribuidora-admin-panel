import { Admin, Resource } from "react-admin";
import { customDataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BookList } from "../components/BookList";
import { CreateForm } from "../components/CreateForm";
import { i18nProvider } from "./i18Provider";

export const App = () => (
  <Admin
    requireAuth
    i18nProvider={i18nProvider}
    dataProvider={customDataProvider}
    authProvider={authProvider}
  >
    <Resource name="librosfiltrados" list={BookList} create={CreateForm} />
  </Admin>
);
