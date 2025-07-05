import mongoose from "mongoose";
import dotenv from "dotenv";
import Terrain from "./models/terrain.js";
import Creneau from "./models/creneau.js";

dotenv.config();

const heures = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"];

function generateDates(n) {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split("T")[0]); // format YYYY-MM-DD
  }
  return dates;
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    const terrains = await Terrain.find();
    const dates = generateDates(7);

    const creneaux = [];

    for (const terrain of terrains) {
      for (const date of dates) {
        for (const heure of heures) {
          creneaux.push({
            date,
            heure,
            terrainId: terrain._id,
          });
        }
      }
    }

    await Creneau.deleteMany(); // optionnel : vide les anciens
    await Creneau.insertMany(creneaux);
    console.log("✔️ Créneaux insérés !");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Erreur :", err);
    process.exit(1);
  });
