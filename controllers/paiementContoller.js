
import Paiement from "../models/paiement.js";

export const enregistrerPaiement = async (req, res) => {
  const { userId, creneauId, montant } = req.body;

  try {
    const paiement = await Paiement.create({
      userId,
      creneauId,
      montant,
      statut: "paye",
    });

    res.status(201).json({ message: "Paiement enregistré", paiement });
  } catch (err) {
    res.status(500).json({ message: "Erreur enregistrement paiement", error: err.message });
  }
};
