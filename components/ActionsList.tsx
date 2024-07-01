import {
  CreateButton,
  ExportButton,
  SelectColumnsButton,
  TopToolbar,
} from "react-admin";
import SendFile from "./SendFile";

export const ActionsList = () => (
  <TopToolbar sx={{ gap: "0.5rem", display: "flex", alignItems: "center" }}>
    <SendFile />
    <SelectColumnsButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);
