const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())




app.get('/getlist', (req, res) => {
    res.send({ sensor_suhu: [{ Suhu: 45, waktu: "2023-01-07 09:00" }, { Suhu: 50, waktu: "2023-01-07 12:00" }, { Suhu: 43, waktu: "2023-01-07 15:00" }] });
});

app.post('/sensor2', (req, res) => {
    var d = req.body;
    console.log(req.body.suhu)
    res.send("Data Yang Terkirim Adalah " + req.body.suhu);
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`) 
});