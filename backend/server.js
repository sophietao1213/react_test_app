const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.post("/upload", (req, res) => {
    setTimeout(() => {
        console.log('file upload')
        return res.status(200).json({result: true, msg: 'file uploaded!!'})
    }, 2000);
    // console.log('file upload')
    // return res.status(200).json({result: true, msg: 'file uploaded!!'})
});

app.delete("/upload", (req, res) => {
    console.log('file deleted')
    return res.status(200).json(
        {result: true, msg: 'file uploaded!!'}
    )
});

app.delete("/txt_file", (req, res) => {
    console.log('file has!!')
    return res.status(200).json(
        {result: true, msg: 'file uploaded!!'}
    )
});

app.listen(8080, () => {
    console.log('server running on port 8080')
});
