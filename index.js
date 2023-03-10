import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
import mongose from 'mongoose'
import dotenv from 'dotenv'
import session from 'express-session'
import collectionRouts from "./routes/index.js";

/*-----------------setup------------------*/
const app = express();
const config = dotenv.config().parsed
const port = config.SERVER_PORT;
app.use(bodyParser.json({}));
app.use(cors())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))





















/*-----------------app------------------*/

app.use('/collection', collectionRouts)

const db = mongose.connect(config.DB_CONNECTION).then(() => {
    app.listen(port, () => { console.log(`The server run at http://localhst:${port}`) })
}).catch((e) => {
    throw e
    process.exit();
})



// console.log(app._router) 