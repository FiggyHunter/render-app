import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));

// Define a test endpoint
app.get("/test", (req, res) => {
  // Return a confirmation message in JSON format
  const confirmationMessage = { message: "Test endpoint confirmed!" };
  res.json(confirmationMessage);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
