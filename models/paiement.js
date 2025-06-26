// models/paiement.js
import mongoose from "mongoose";

const paiementSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Utilisateur", required: true },
  creneauId: { type: mongoose.Schema.Types.ObjectId, ref: "Creneau", required: true },
  montant: { type: Number, required: true },
  statut: { type: String, enum: ["en_attente", "paye"], default: "paye" },
  date: { type: Date, default: Date.now },
});

const Paiement = mongoose.model("Paiement", paiementSchema);
export default Paiement;
