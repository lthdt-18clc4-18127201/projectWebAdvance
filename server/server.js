import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>This is the homepage</h1>');
});

app.get('/hi', (req, res) => {
    res.send('<h1>This is the HIpage</h1>');
});


app.listen(PORT, () => {
    console.log(`Successfully started! Your application is running at http://localhost:${PORT}`);
})