import { Admin, CustomRoutes, Resource } from "react-admin";
import { customDataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BookList } from "../components/BookList";
import { CreateForm } from "../components/CreateForm";
import { EditForm } from "../components/EditForm";
import { i18nProvider } from "./i18Provider";
import { ShowBook } from "../components/ShowBook";
import { Route } from "react-router-dom";
import SendFile from "../components/SendFile";

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
      <CustomRoutes>
        <Route path="/sendfile" element={<SendFile />} />
      </CustomRoutes>
    </Admin>
  );
};
