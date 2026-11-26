import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);
app.use("/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});