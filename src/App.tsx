import { Admin, Resource } from "react-admin";
import { customDataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BookList } from "../components/BookList";
import { CreateForm } from "../components/CreateForm";
import { EditForm } from "../components/EditForm";
import { i18nProvider } from "./i18Provider";
import { ShowBook } from "../components/ShowBook";
import { EditorialList } from "../components/EditorialList";
import { AuthorList } from "../components/AuthorList";
export const App = () => {
  return (
    <Admin
      requireAuth
      i18nProvider={i18nProvider}
      dataProvider={customDataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="librosfiltrados"
        list={BookList}
        create={CreateForm}
        edit={EditForm}
        show={(props) => (
          <ShowBook
            basePath="/librosfiltrados"
            resource="librosfiltrados"
            {...props}
          />
        )}
      />
      <Resource name="editorialesfiltradas" list={EditorialList} />
      <Resource name="autoresfiltrados" list={AuthorList} />
    </Admin>
  );
};
