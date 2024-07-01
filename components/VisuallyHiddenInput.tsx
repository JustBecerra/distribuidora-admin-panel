import { Input } from "@mui/material";

interface props {
  handleFileChange: (event: any) => void;
}

export const VisuallyHiddenInput = ({ handleFileChange }: props) => {
  return (
    <Input
      type="file"
      onChange={handleFileChange}
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
