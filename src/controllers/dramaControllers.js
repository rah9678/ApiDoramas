import Drama from "../models/Drama.js";

export const getAllDramas = async (req, res) => {
  try {
    const dramas = await Drama.findAll(); // Corrigido: antes estava "findALL"
    res.json(dramas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar doramas" });
  }
};
