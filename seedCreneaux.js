// seedCreneaux.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Terrain from "./models/terrain.js";
import Creneau from "./models/creneau.js";

dotenv.config();

const generateCreneaux = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const terrains = await Terrain.find();

    const jours = 5; // nombre de jours à générer
    const heures = Array.from({ length: 13 }, (_, i) => 10 + i); // 10h à 22h

    const creneaux = [];

    const today = new Date();

    for (const terrain of terrains) {
      for (let j = 0; j < jours; j++) {
        const date = new Date(today);
        date.setDate(today.getDate() + j);
        const dateStr = date.toISOString().split("T")[0];

        for (const heure of heures) {
          const heureStr = `${heure.toString().padStart(2, "0")}:00`;

          creneaux.push({
            terrainId: terrain._id,
            date: dateStr,
            heure: heureStr,
            disponible: true,
          });
        }
      }
    }

    await Creneau.deleteMany(); // vide les anciens créneaux
    await Creneau.insertMany(creneaux);

    console.log(`✅ ${creneaux.length} créneaux insérés`);
    process.exit();
  } catch (err) {
    console.error("❌ Erreur :", err.message);
    process.exit(1);
  }
};

generateCreneaux();
