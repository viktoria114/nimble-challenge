import {
  Button,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "../App.css";

const Login = ({ email, setEmail, loading, error, handleSubmit, candidate }) => {
  return (
    <>
  
      <Box
        sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transform: candidate ? "translateY(-40px)" : "translateY(0)",
}}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#000",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
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
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                color: "#000",
                fontWeight: "400",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Ingresa tu correo electrónico!
            </Typography>{" "}
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              size="small"
              placeholder="email@ejemplo.com"
              sx={{
                width: 360,
                ml: 2,
                bgcolor: "#fff",
                borderRadius: 2,
                fontFamily: "Poppins, sans-serif",
              }}
            ></TextField>
            <Button
              variant="contained"
              onClick={handleSubmit}
              loading={loading}
              sx={{
                ml: 2,
                bgcolor: "#000",
                color: "#fff",
                "&:hover": { bgcolor: "#6e5877ff" },
              }}
            >
              <SendIcon />
            </Button>
          </Box>
          {error && (
            <Typography
              variant="body1"
              sx={{ color: "red", mt: 2, fontFamily: "Poppins, sans-serif" }}
            >
              {error}
            </Typography>
          )}
        </Paper>
      </Box>
    </>
  );
}

export default Login;
