import Creneau from "../models/creneau.js";

export const getCreneauxByTerrain = async (req, res) => {
  try {
    const { terrainId } = req.params;

    const creneaux = await Creneau.find({ terrainId: parseInt(terrainId), disponible: true });

    res.status(200).json(creneaux);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération des créneaux", error: err.message });
  }
};

export const getAllCreneaux = async (req, res) => {
  try {
    const all = await Creneau.find({});
    console.log("📦 Total créneaux trouvés :", all.length);
    res.status(200).json(all);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

export const reserverCreneau = async (req, res) => {
  try {
    const { id } = req.params;

    const creneau = await Creneau.findByIdAndUpdate(
      id,
      { disponible: false },
      { new: true }
    );

    if (!creneau) return res.status(404).json({ message: "Creneau non trouvé" });

    res.status(200).json(creneau);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la réservation" });
  }
};

