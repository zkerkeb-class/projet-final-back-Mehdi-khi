import mongoose from "mongoose";

const creneauSchema = new mongoose.Schema({
  terrainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Terrain", // 👈 nom du modèle Mongo
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  heure: {
    type: String,
    required: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
});

const Creneau = mongoose.model("Creneau", creneauSchema);
export default Creneau;
