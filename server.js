import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    likes: 15,
    dislikes: 2,
    average_rating: 4.8,
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    likes: 12,
    dislikes: 1,
    average_rating: 4.9,
  },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    featuredMovies: movies.slice(0, 2),
    recentMovies: movies.slice().reverse(),
    popularMovies: movies.slice().sort((a, b) => b.likes - a.likes),
  });
});

app.listen(port, () => {
  console.log(`MovieReviews app running at http://localhost:${port}`);
});
