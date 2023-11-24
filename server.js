// Create Server
const express = require("express");
const app = express();

const PORT = 5000;

// localhost:<PORT>
app.listen(PORT, () => {
    console.log("localhost:%s", PORT);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})