const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/getPVGISData', async (req, res) => {
    const { latitude, longitude, startYear, endYear } = req.body;
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://re.jrc.ec.europa.eu/api/seriescalc?lat=${latitude}&lon=${longitude}&startyear=${startYear}&endyear=${endYear}&api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
