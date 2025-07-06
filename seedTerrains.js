import mongoose from "mongoose";
import dotenv from "dotenv";
import Terrain from "./models/terrain.js";

dotenv.config();

const terrains = [
  {
    
    nom: "Stade 2",
    type: "intérieur",
    clim: true,
    surface: "standard",
    image: "/images/stade2.webp",
    prix: 15
  },
  {
    
    nom: "Stade 3",
    type: "intérieur",
    clim: false,
    surface: "standard",
    image: "/images/stade3.jpg",
    prix: 10
  },
  {
    
    nom: "Stade 4",
    type: "extérieur",
    clim: false,
    surface: "grande",
    image: "/images/stade4.png",
    prix: 15
  },
  {
    
    nom: "Stade 5",
    type: "extérieur",
    clim: false,
    surface: "standard",
    image: "/images/stade5.webp",
    prix: 10
  },
  {
    
    nom: "Stade 6",
    type: "extérieur",
    clim: false,
    surface: "standard",
    image: "/images/stade6.jpg",
    prix: 10
  }
];

const seedTerrains = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Terrain.deleteMany(); // vide les terrains existants
    await Terrain.insertMany(terrains);
    console.log("✅ Terrains insérés avec succès !");
    process.exit();
  } catch (err) {
    console.error("❌ Erreur d’insertion :", err);
    process.exit(1);
  }
};

seedTerrains();
