const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'server', 'db.json');

  res.setHeader("Access-Control-Allow-Methods", "GET");
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading db.json:", error);
    res.status(500).json({ error: "Failed to read data" });
  }
}
