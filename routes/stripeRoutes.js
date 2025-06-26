// stripeRoutes.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import Creneau from "../models/creneau.js";
import Terrain from "../models/terrain.js";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const { userId, creneauId } = req.body;

  try {
    // 🔍 Récupération du créneau et du terrain
    const creneau = await Creneau.findById(creneauId).populate("terrainId");
    if (!creneau || !creneau.terrainId) {
      return res.status(404).json({ message: "Créneau ou terrain introuvable" });
    }

    const terrain = creneau.terrainId;
    const montant = terrain.prix;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Réservation ${terrain.nom}`,
            },
            unit_amount: montant * 100, // 💶 prix dynamique
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/success?creneauId=${creneauId}`,
      cancel_url: `http://localhost:5173/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("❌ Erreur Stripe :", err);
    res.status(500).json({ error: "Erreur Stripe", details: err.message });
  }
});

export default router;
