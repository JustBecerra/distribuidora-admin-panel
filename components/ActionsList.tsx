import React from "react";
import {
  CreateButton,
  ExportButton,
  Link,
  SelectColumnsButton,
  TopToolbar,
} from "react-admin";
import { Link as RouterLink } from "react-router-dom";
import SendFile from "./SendFile";

export const ActionsList = () => (
  <TopToolbar sx={{ gap: "0.5rem" }}>
    {/* <Link component={RouterLink} to="/sendfile">
      Cargar CSV
    </Link> */}
    <SendFile />
    <SelectColumnsButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);
