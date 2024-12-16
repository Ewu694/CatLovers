import express from "express";
import pg from "pg";

const app = express();
const database = new pg.Client(
    {   
        user: "postgres",   
        host: "localhost",   
        database: "postgres",   
        password: "jiljil124",   
        port: 5173
    }
); db.connect;

database.connect();


app.get('/', (req, res) => {
    const email = req.body.username;
    const password = req.body.password;

    try{
        const result = await database.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
        if(result.rows.length > 0){
            res.send('Login Successful');
        } else {
            res.send('Login Failed');
        }
    }
});

app.listen(5173, () => {   
    console.log('Server is running on http://localhost:5173');
});

database.end;