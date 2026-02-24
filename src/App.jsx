import "./App.css";
import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

function App() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  setLoading(true);
  // Aquí puedes agregar la lógica para enviar el correo electrónico al backend
}
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" sx={{ color: "#000", fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
          Nimble Gravity Challenge
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            bgcolor: "#c69fd5",
           m: 2,
            display: "flex",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography variant="h6" sx={{ color: "#000", fontWeight: "400",  fontFamily: "Poppins, sans-serif"  }}>
            Ingresa tu correo electrónico!
          </Typography>{" "}
          <TextField
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: 360, ml: 2, bgcolor: "#fff", borderRadius: 2,  fontFamily: "Poppins, sans-serif"  }}
          ></TextField>
          <Button variant="contained"  onClick={handleSubmit}
            loading={loading} sx={{ ml: 2, bgcolor: "#000", color: "#fff", "&:hover": { bgcolor: "#6e5877ff", } }}>
            
            <SendIcon  />
          </Button>
        </Paper>
      </Box>
      <div></div>
    </>
  );
}

export default App;
