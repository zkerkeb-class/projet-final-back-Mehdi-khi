import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Utilisateur", required: true },
  creneauId: { type: mongoose.Schema.Types.ObjectId, ref: "Creneau", required: true },
  dateReservation: { type: Date, default: Date.now },
});

// ✅ Ajoute un index unique : un seul user peut réserver un seul créneau une fois
reservationSchema.index({ userId: 1, creneauId: 1 }, { unique: true });

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
