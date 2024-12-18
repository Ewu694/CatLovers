import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const database = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "jiljil124",
  port: 5432
});

database.connect()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login request received:', username);

  try {
    const result = await database.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    if (result.rows.length > 0) {
      res.status(200).send('Login Successful'); // 200 for successful login
      console.log(username, 'logged in successfully');
    } else {
      res.status(401).send('Invalid username or password'); // 401 for unauthorized
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('An error occurred: ' + err.message); // 500 for server error
  }
});

app.post('/api/create-account', async (req, res) => {
  const { username, password } = req.body;
  console.log('Create account request received:', username);

  try {
    const userCheck = await database.query('SELECT * FROM users WHERE username = $1', [username]);
    if (userCheck.rows.length > 0) {
      res.status(409).send('Username already exists'); // 409 for conflict
      return;
    }

    // Insert the new user
    await database.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    res.status(201).send('Account Created Successfully'); // 201 for successful account creation
  } catch (err) {
    console.error('Error during account creation:', err);
    res.status(500).send('An error occurred: ' + err.message); // 500 for server error
  }
});

app.post('/cats', async (req, res) => {
  const { imageUrl, userId } = req.body;
  console.log('Favorite request received:', imageUrl);

  try {
    await database.query('UPDATE users SET FavoriteImage = $1 WHERE username = $2', [imageUrl, username]);
    res.status(200).send('Image favorited successfully');
  } catch (err) {
    console.error('Error during favoriting image:', err);
    res.status(500).send('An error occurred: ' + err.message); // 500 for server error
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
