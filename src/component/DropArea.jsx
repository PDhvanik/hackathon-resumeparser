import { Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const DropArea = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const viewHandler = () => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=> {
      setImage(reader.result);
    }
  }
  const clearHandler = () => {
    setFile(null);
    setImage(null);
  }
  return (
    <Box sx={{ height: "100vh", bgcolor: "e7ebf0" }}>
      <Container
        sx={{
          display: "flex",
          fexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom pt={2} color="primary">
          Image Viewer
        </Typography>
        <Card sx={{ maxWidth: '600px' }}>
          <CardContent>
            <Stack direction="row" justifyContent="center">
              <FileUploader
                multiple={true}
                name="files"
                types={["jpeg", "png", "mp3", "mp4", "gif", "jpg"]}
                handleChange={(file) => setFile(file)}
              />
            </Stack>
            <Typography align="center">
              {file ? `File name: ${file.name}` : `No files uploaded yet!`}
            </Typography>
            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Button variant="contained" onClick={viewHandler} disabled={!file}>View</Button>
              <Button variant="contained" color="error" onClick={clearHandler} disabled={!file}>Cancel</Button>
            </Stack>
          </CardContent>
        </Card>
        {image && <img src={image} style={{ width: '90%', marginTop: '20px' }} />}
      </Container>
    </Box>
  );
};

export default DropArea;
