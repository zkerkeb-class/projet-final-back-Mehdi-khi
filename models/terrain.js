import mongoose from "mongoose";

const terrainSchema = new mongoose.Schema({
  nom: String,
  type: String,
  clim: Boolean,
  surface: String,
  image: String,
  prix: {
    type: Number,
    required: true,
    default: 10 // par exemple
  }
});

const Terrain = mongoose.model("Terrain", terrainSchema);
export default Terrain;
