import fs from 'fs';
import csv from 'csv-parser';
import sequelize from '../config/database.js';
import Drama from '../models/Drama.js';

async function importCSV() {
    await sequelize.sync({ force: true });

    fs.createReadStream('./src/database/korean_dramas.csv')
        .pipe(csv())
        .on('data', async (row) => {
            await Drama.create({
                title: row.Title,
                genre: row.Genre,
                year: parseInt(row.Year),
                rating: parseFloat(row.Rating)
            });
        })
        .on('end', () => {
            console.log('Importação concluída!');
            process.exit();
        });
}

importCSV();
