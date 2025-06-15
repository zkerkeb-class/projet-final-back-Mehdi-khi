import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import authRoutes from "./routes/authRoutes.js";
import cors from 'cors';

const app = express();
app.use(cors());


app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connecté"))
.catch((err) => console.error("❌ Erreur MongoDB :", err));

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Hello World");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
