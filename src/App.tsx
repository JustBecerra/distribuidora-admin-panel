import { Admin, Resource } from "react-admin";
import { customDataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { BookList } from "../components/BookList";
import { CreateForm } from "../components/CreateForm";
import { EditForm } from "../components/EditForm";
import { i18nProvider } from "./i18Provider";
import { ShowBook } from "../components/ShowBook";
import { QueryClient } from "react-query";
export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  });
  return (
    <Admin
      requireAuth
      i18nProvider={i18nProvider}
      dataProvider={customDataProvider}
      authProvider={authProvider}
      queryClient={queryClient}
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
    </Admin>
  );
};
