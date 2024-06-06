import React from "react";
import { Input } from "@mui/material";
export const VisuallyHiddenInput = () => {
  return (
    <Input
      type="hidden"
      sx={{
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
      }}
    />
  );
};
