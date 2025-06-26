import mongoose from "mongoose";
import dotenv from "dotenv";
import Terrain from "./models/terrain.js";

dotenv.config();

const terrains = [
  { nom: "Stade 1", type: "intérieur", clim: true, surface: "grande", image: "/images/stade.png" },
  { nom: "Stade 2", type: "intérieur", clim: true, surface: "standard", image: "/images/stade.png" },
  { nom: "Stade 3", type: "intérieur", clim: false, surface: "standard", image: "/images/stade.png" },
  { nom: "Stade 4", type: "extérieur", clim: false, surface: "grande", image: "/images/stade.png" },
  { nom: "Stade 5", type: "extérieur", clim: false, surface: "standard", image: "/images/stade.png" },
  { nom: "Stade 6", type: "extérieur", clim: false, surface: "standard", image: "/images/stade.png" }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Terrain.deleteMany(); // optionnel : vide la collection
    await Terrain.insertMany(terrains);
    console.log("✔️ Terrains insérés !");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Erreur d'insertion :", err);
    process.exit(1);
  });
