import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './DropArea.css'
const DropArea = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const viewHandler = () => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    }
  }
  const clearHandler = () => {
    setFile(null);
    setImage(null);
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom pt={2}>
          Upload Files
        </Typography>
        <Card sx={{ width: '500px', height: '300px' }}>
          <CardContent>
            <Stack direction="row" justifyContent="center">
              <FileUploader
                style={{ height: '100px' }}
                multiple={true}
                name="files"
                types={["jpeg", "png", "mp3", "mp4", "gif", "jpg"]}
                handleChange={(file) => setFile(file)}
              />
            </Stack>
            <Typography align="center" mt={1}>
              {file ? `File name: ${file.name}` : `No files uploaded yet!`}
            </Typography>
            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Button variant="contained" onClick={viewHandler} disabled={!file}>View</Button>
              <Button variant="contained" color="error" onClick={clearHandler} disabled={!file}>Cancel</Button>
            </Stack>
          </CardContent>
        </Card>
        {image && <img src={image} alt="Preview" style={{ width: '90%', marginTop: '20px' }} />}
      </Box>
      <div className="submit-btn">
        <button type="submit">Submit</button>
      </div>
    </>
  );
};

export default DropArea;
