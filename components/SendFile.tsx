import React, { useState } from "react";
import { SaveButton, useNotify, useRefresh } from "react-admin";
import Papa from "papaparse";
import { FormControl, Button, Typography, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";
const SendFile = () => {
  const [file, setFile] = useState(null);
  const notify = useNotify();
  const refresh = useRefresh();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      notify("No file selected");
      return;
    }

    // Parse CSV file
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data;
        // Send data to backend
        fetch("/api/upload-csv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then(() => {
            notify("File uploaded successfully");
            refresh(); // Refresh the page or data
          })
          .catch((error) => {
            notify(`Error: ${error.message}`);
          });
      },
    });
  };

  return (
    <Box>
      {/* <input type="file" accept=".csv" onChange={handleFileChange} /> */}
      {/* <Typography>
        Recuerde que el archivo sea de tipo CSV y que las columnas esten
        ordenadas como en la base de datos
      </Typography> */}
      <FormControl>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Cargar archivo
          <VisuallyHiddenInput />
        </Button>
        {/* <Button onClick={handleUpload}>Cargar</Button> */}
      </FormControl>
    </Box>
  );
};

export default SendFile;
