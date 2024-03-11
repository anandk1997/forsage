import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle any other routes by serving the index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server on port 3326
const port = 3326;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
