import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import authRoutes from "./routes/authRoutes.js";
import cors from 'cors';
import terrainsRoutes from "./routes/terrainsRoutes.js";
import creneauxRoutes from "./routes/creneauxRoutes.js";


const app = express();
app.use(cors());


app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("✅ MongoDB connecté"))
.catch((err) => console.error("❌ Erreur MongoDB :", err));

app.use("/images", express.static("public/images"));
app.use("/api/auth", authRoutes);
app.use("/api/terrains", terrainsRoutes);
app.use("/api/creneaux", creneauxRoutes);




app.get("/", (req, res) => {
  res.send("Hello World");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
