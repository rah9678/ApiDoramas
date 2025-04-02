import db from "./connection.js";

async function setupDatabase() {
    try {
        await db.exec(`
            CREATE TABLE IF NOT EXISTS Dramas (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                genre TEXT,
                year INTEGER,
                rating REAL
            );
        `);
        console.log("Banco de dados configurado com sucesso! 🚀");
    } catch (error) {
        console.error("Erro ao configurar o banco:", error);
    }
}

setupDatabase();
