import Terrain from "../models/terrain.js";

export const getAllTerrains = async (req, res) => {
  try {
    const terrains = await Terrain.find();
    res.status(200).json(terrains);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};

export const getTerrainById = async (req, res) => {
  try {
    const terrain = await Terrain.findById(req.params.id);
    if (!terrain) return res.status(404).json({ message: "Terrain introuvable" });
    res.json(terrain);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};