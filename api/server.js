// /api/server.js
const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  // Определяем путь к файлу db.json
  const filePath = path.join(process.cwd(), 'server', 'db.json');

  try {
    // Читаем файл db.json
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    // Возвращаем данные в формате JSON
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading db.json:", error);
    res.status(500).json({ error: "Failed to read data" });
  }
}
