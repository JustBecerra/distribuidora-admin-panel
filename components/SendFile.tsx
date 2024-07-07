import { FormControl, Button, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { fetchUtils } from "react-admin";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";
import Papa from "papaparse";

const SendFile = ({ resource }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setSelectedFile(results.data);
      },
    });
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/${resource}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedFile),
      });

      if (response.ok) {
        console.log("File uploaded successfully:");
        alert("File uploaded!");
        location.reload();
      } else {
        console.error("Error uploading file:", response.statusText);
      }
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
