import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
  console.log("📥 Données reçues:", req.body); // 👈 ajoute cette ligne
  const { userName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email déjà utilisé." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ userName, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Utilisateur créé avec succès." });
  } catch (err) {
    console.error("❌ Erreur dans register:", err); // 👈 très utile
    res.status(500).json({ message: "Erreur serveur.", error: err.message });
  }
};



//login a user

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Email ou mot de passe invalide." });
//pas encore detaillé
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });

      res.status(200).json({ token, user: { id: user._id, userName: user.userName, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur.", error: err.message });
  }
};


