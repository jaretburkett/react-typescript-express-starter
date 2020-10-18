import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 80;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// expose public path
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// expose api endpoint
app.get('/api', (req, res) => {
    res.json({
        status: 'OK'
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})