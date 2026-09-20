// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());



// const db = mysql.createConnection({

//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "angular_events"

// });


// db.connect(function (error) {

//     if (error) {

//         console.error(
//             "MySQL connection failed:",
//             error.message
//         );

//         return;
//     }

//     console.log("Connected to MySQL successfully.");

// });


// // ==========================================
// // GET Students
// // ==========================================

// app.get("/api/students", function (req, res) {

//     const query = `
//         SELECT id, name, course, marks
//         FROM students
//         ORDER BY id
//     `;

//     db.query(query, function (error, results) {

//         if (error) {

//             console.error(error);

//             return res.status(500).json({
//                 message: "Unable to fetch students"
//             });

//         }

//         res.json(results);

//     });

// });



// const PORT = 3000;

// app.listen(PORT, function () {

//     console.log(
//         `Server running at http://localhost:${PORT}`
//     );

// });

// require("dotenv").config();

// const mysql = require("mysql2");

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });


require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();



app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect(function (error) {

    if (error) {
        console.error("MySQL connection failed:");
        console.error(error.message);
        return;
    }

    console.log("Connected to MySQL successfully.");

});



app.get("/", function (req, res) {

    res.send("AngularJS Events Backend is running.");

});



app.get("/api/students", function (req, res) {

    const query = `
        SELECT id, name, course, marks
        FROM students
        ORDER BY id
    `;

    db.query(query, function (error, results) {

        if (error) {

            console.error("Database query failed:");
            console.error(error.message);

            return res.status(500).json({
                message: "Database query failed",
                error: error.message
            });

        }

        console.log("Students fetched:", results.length);

        res.json(results);

    });

});



const PORT = 3000;

app.listen(PORT, function () {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});