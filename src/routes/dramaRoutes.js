import express from "express";
import db from "../database/connection.js"; // Certifique-se que o caminho está certo!

const router = express.Router();

router.get('/api/dramas', async (req, res) => {
    try {
        const { genre, year, rating_min, title, order } = req.query;

        let query = "SELECT * FROM Dramas WHERE 1=1";
        let params = [];

        if (genre) {
            query += " AND genre LIKE ?";
            params.push(`%${genre}%`);
        }
        if (year) {
            query += " AND year = ?";
            params.push(year);
        }
        if (rating_min) {
            query += " AND rating >= ?";
            params.push(rating_min);
        }
        if (title) {
            query += " AND title LIKE ?";
            params.push(`%${title}%`);
        }
        if (order === "asc") {
            query += " ORDER BY title ASC";
        } else if (order === "desc") {
            query += " ORDER BY title DESC";
        }

        const dramas = await db.all(query, params); // Use `db.all()` para SQLite
        res.json(dramas);
    } catch (error) {
        console.error("Erro ao buscar dramas:", error);
        res.status(500).json({ error: "Erro ao buscar dramas" });
    }
});

export default router;
