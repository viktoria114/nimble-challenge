import { useState } from "react";
import { postApplyToJob } from "../api/candidate";
import { Button, Card, TextField, Typography } from "@mui/material";

const JobItem = ({ job, candidate }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const handleApply = async () => {
    setError("");
    setSuccess(false);

    if (!isValidUrl(url)) {
      setError("Por favor ingresa un link válido");
      return;
    }

    try {
      setLoading(true);

      await postApplyToJob({
        uuid: candidate.uuid,
        jobId: job.id,
        candidateId: candidate.candidateId,
        repoUrl: url,
        applicationId: candidate.applicationId,
      });

      setSuccess(true);
      setUrl("");
    } catch (err) {
      setError("Ocurrió un error al enviar la postulación: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        p: 3,
        mb: 2,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Poppins, sans-serif" }}
      >
        {job.title}
      </Typography>
      <TextField
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        error={!!error}
        helperText={error}
        fullWidth
        size="small"
        placeholder="https://github.com/..."
        sx={{ my: 2, fontFamily: "Poppins, sans-serif" }}
      />
      <Button
        variant="contained"
        loading={loading}
        onClick={handleApply}
        sx={{ bgcolor: "#c69fd5", fontFamily: "Poppins, sans-serif" }}
      >
        Aplicar
      </Button>
      {success && (
        <Typography
          color="success.main"
          variant="body2"
          mt={1}
          sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
        >
          ✔ Postulación enviada correctamente
        </Typography>
      )}
    </Card>
  );
};

export default JobItem;
