import Reservation from "../models/reservation.js";
import Creneau from "../models/creneau.js"; // ✅ on importe le modèle

export const creerReservation = async (req, res) => {
  const { userId, creneauId } = req.body;

  try {
  const reservation = await Reservation.create({ userId, creneauId });
  await Creneau.findByIdAndUpdate(creneauId, { disponible: false });
  res.status(201).json(reservation);
} catch (err) {
  if (err.code === 11000) {
    return res.status(400).json({ message: "Réservation déjà existante." });
  }
  res.status(500).json({ message: "Erreur serveur", error: err.message });
}
if (res1.status === 400) {
  const errorData = await res1.json();
  setMessage(`⚠️ ${errorData.message}`);
  return;
}

};

export const getReservationsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const reservations = await Reservation.find({ userId })
  .populate({
    path: "creneauId",
    populate: { path: "terrainId" },
  });
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Erreur récupération", error: err.message });
  }
};

export const annulerReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Reservation.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Réservation non trouvée" });
    }
    res.status(200).json({ message: "Réservation annulée avec succès" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};