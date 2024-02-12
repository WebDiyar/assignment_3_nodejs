const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const { connectToMongoDB } = require("./db.js");
const session = require("express-session");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.static("styles"));

mongoose.connect("mongodb+srv://Diyar:Asd__200205_tr@diyar.qhyiil5.mongodb.net/assignment_3_nodejs");


const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const weatherApi = require("./routes/weatherApi");
const currencyApi = require("./routes/currencyApi");
const history = require("./routes/history");
const mockApi = require("./routes/mockApi");
app.use(
    session({
        secret: "123",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 600000 },
    })
);

connectToMongoDB()
    .then((client) => {
        app.locals.db = client.db();

        app.use("/", registerRouter);
        app.use("/", loginRouter);
        app.use("/admin", adminRouter); 
        app.use("/user", userRouter);
        app.use("/", weatherApi);
        app.use("/", currencyApi);
        app.use("/", history);
        app.use("/", mockApi);
        // app.use("/",apiRouter)
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB Atlas", error);
    });


// app.use('/', mainRouter);
// app.use('/users', userRouter);
// app.use('/', registerRouter);
// app.use('/', loginRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});