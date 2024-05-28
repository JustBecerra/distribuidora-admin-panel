import React from "react";
import {
  CreateButton,
  ExportButton,
  SelectColumnsButton,
  TopToolbar,
} from "react-admin";

export const ActionsList = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);
