import { ExportButton, SelectColumnsButton, TopToolbar } from "react-admin";
import SendFile from "./SendFile";

export const ActionsList = ({ resource }) => (
  <TopToolbar sx={{ gap: "0.5rem", display: "flex", alignItems: "center" }}>
    <SendFile resource={resource} />
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
);
