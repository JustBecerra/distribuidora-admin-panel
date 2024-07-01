import { FormControl, Button, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { fetchUtils } from "react-admin";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";

const SendFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log("file", event.target.files);
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetchUtils.fetchJson(
        "http://localhost:3000/libros",
        {
          method: "PUT",
          body: formData,
          // No need to manually set Content-Type for FormData
        }
      );
      const json = await response.json(); // Parentheses added here
      console.log("File uploaded successfully:", json);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Box>
      <FormControl
        sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
      >
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Cargar archivo
          <VisuallyHiddenInput handleFileChange={handleFileChange} />
        </Button>
        <Button onClick={handleUpload}>Confirmar</Button>
      </FormControl>
    </Box>
  );
};

export default SendFile;
