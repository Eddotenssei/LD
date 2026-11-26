import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});