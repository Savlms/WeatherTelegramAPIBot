// importing the required 

const express = require('express');
const BotService = require ('./botService.js')

const app = express();
const port = 3040;


const bot = new BotService()



// Endpoint to get all infos
app.get('/', (req, res) => {
    res.json({message: 'welcome to savlms weather API'});
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});