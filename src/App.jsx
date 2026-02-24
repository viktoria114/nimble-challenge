import { useState } from "react";
import { Typography, Box } from "@mui/material";
import "./App.css";
import { getCandidateByEmail} from "./api/candidate";
import Login from "./components/login";
import JobItem from "./components/JobItem";
import { getJobs } from "./api/jobs";

function App() {
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
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <Login
          email={email}
          setEmail={setEmail}
          loading={loading}
          error={error}
          handleSubmit={handleSubmit}
          candidate={candidate}
        />

        {candidate && (
          <Box
            sx={{
              width: "100%",
              alignContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#000",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Posiciones disponibles
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 4,
                width: "90%",
                mt: 4,
              }}
            >
              {jobs.map((job) => (
                <JobItem key={job.id} job={job} candidate={candidate} />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;
