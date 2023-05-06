const express = require("express");
const { dbconnection } = require("./configs/db");
const port = process.env.PORT || 8080
const app = express();
const cors = require("cors");
const noticeRouter = require("./routers/notice.route");

// middleware

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('yeah'))
// routers
app.use('/notice',noticeRouter)


app.listen(port, () => {
    try {
        dbconnection;
        console.log("server listening on port " + port);
    } catch (error) {
        console.log({ error: error.message });
    }
});
