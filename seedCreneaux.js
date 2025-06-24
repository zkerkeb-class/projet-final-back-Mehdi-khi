import mongoose from "mongoose";
import "dotenv/config";
import Creneau from "./models/creneau.js";

const MONGO_URI = process.env.MONGO_URI;

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connecté à MongoDB");

    // ⚠️ Vide la collection pour repartir propre
    await Creneau.deleteMany();
    console.log("🗑️ Ancien contenu supprimé");

    const dates = ["2025-06-18", "2025-06-19"];
    const heures = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];
    const creneaux = [];

    for (let terrainId = 1; terrainId <= 6; terrainId++) {
      for (let date of dates) {
        for (let heure of heures) {
          creneaux.push({
            terrainId,
            date,
            heure,
            disponible: true,
          });
        }
      }
    }

    const result = await Creneau.insertMany(creneaux);
    console.log(`✅ ${result.length} créneaux insérés`);
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Erreur lors du seed :", err.message);
    process.exit(1);
  }
};

seed();
