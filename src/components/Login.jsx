import "./App.css";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { getCandidateByEmail, getJobs } from "./api/candidate";

function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const candidateData = await getCandidateByEmail(email);
      setCandidate(candidateData);
      const jobsData = await getJobs();
    setJobs(jobsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    console.log(candidate);
    console.log(jobs)
  };

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
