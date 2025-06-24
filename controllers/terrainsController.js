export const getAllTerrains = (req, res) => {
  const terrains = [
    { id: 1, nom: "Stade 1", type: "intérieur", clim: true, surface: "grande", image: "/images/stade.png" },
    { id: 2, nom: "Stade 2", type: "intérieur", clim: true, surface: "standard", image: "/images/stade.png" },
    { id: 3, nom: "Stade 3", type: "intérieur", clim: false, surface: "standard", image: "/images/stade.png" },
    { id: 4, nom: "Stade 4", type: "extérieur", clim: false, surface: "grande", image: "/images/stade.png" },
    { id: 5, nom: "Stade 5", type: "extérieur", clim: false, surface: "standard", image: "/images/stade.png" },
    { id: 6, nom: "Stade 6", type: "extérieur", clim: false, surface: "standard", image: "/images/stade.png" }
  ];

  res.status(200).json(terrains);
};
