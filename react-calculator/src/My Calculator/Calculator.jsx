import { Box, Container, Grid, Paper, Button, TextField } from "@mui/material";
import { useState } from "react";

export const Calculator = () => {
  const [num, setNum] = useState("");

  const handleButtonClick = (value) => {
    const operators = ["+", "-", "×", "÷"];

    if (value === "C") {
      setNum("");
      return;
    }

    if (value === "=") {
      try {
        if (!num) return;

        // Convert symbols for js eval
        const expression = num.replace(/×/g, "*").replace(/÷/g, "/");

        setNum(String(eval(expression)));
      } catch {
        setNum("Error");
      }
      return;
    }

    // Prevent starting with + × ÷
    if (num === "" && (value === "+" || value === "×" || value === "÷")) {
      return;
    }

    // Prevent multiple operators
    const lastChar = num.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
      // Replace last operator instead of adding
      setNum(num.slice(0, -1) + value);
      return;
    }

    setNum((prev) => prev + value);
  };

  return (
    <Container sx={{ mt: 4, width: 360 }}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
        }}
      >
        {/* Display */}
        <Box sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="0"
            value={num}
            InputProps={{ readOnly: true }}
            sx={{
              fontWeight: "bold",
              "& .MuiInputBase-input": { wordBreak: "break-all" },
            }}
          />
        </Box>

        {/* Buttons */}
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#ff9800" }}
              onClick={() => handleButtonClick("C")}
            >
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#9e9e9e" }}
              value="÷"
              onClick={(e) => handleButtonClick(e.target.value)}
            >
              ÷
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#9e9e9e" }}
              value="×"
              onClick={(e) => handleButtonClick(e.target.value)}
            >
              ×
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#9e9e9e" }}
              value="-"
              onClick={(e) => handleButtonClick(e.target.value)}
            >
              -
            </Button>
          </Grid>

          {["7", "8", "9", "+"].map((btn, i) => (
            <Grid item xs={3} key={i}>
              <Button
                fullWidth
                variant="contained"
                sx={btn === "+" ? { bgcolor: "#9e9e9e" } : {}}
                value={btn}
                onClick={(e) => handleButtonClick(e.target.value)}
              >
                {btn}
              </Button>
            </Grid>
          ))}

          {["4", "5", "6", "="].map((btn, i) => (
            <Grid item xs={3} key={i}>
              <Button
                fullWidth
                variant="contained"
                sx={btn === "=" ? { bgcolor: "#2196f3" } : {}}
                value={btn}
                onClick={(e) => handleButtonClick(e.target.value)}
              >
                {btn}
              </Button>
            </Grid>
          ))}

          {["1", "2", "3", "0"].map((btn, i) => (
            <Grid item xs={3} key={i}>
              <Button
                fullWidth
                variant="contained"
                value={btn}
                onClick={(e) => handleButtonClick(e.target.value)}
              >
                {btn}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};
