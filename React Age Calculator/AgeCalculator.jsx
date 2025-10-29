import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const AgeCalculator = () => {
  const [date, setDate] = useState(null);

  const handleInputChange = (value) => {
    if (!value) {
      setDate(null);
      return;
    }

    const birth = new Date(value);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    setDate(age);
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 120,
        borderRadius: 2,
        bgcolor: "background.paper",
        boxShadow: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 4,
          transform: "translateY(-2px)",
        },
      }}
    >
      <TextField
        type="date"
        variant="outlined"
        size="small"
        sx={{
          width: "80%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
            "&:hover fieldset": {
              borderColor: "primary.dark",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
        onChange={(e) => handleInputChange(e.target.value)}
      />

      <Typography component="span" sx={{ marginTop: 2 }}>
        Your age {date !== null ? date : "—"} years old
      </Typography>
    </Box>
  );
};
