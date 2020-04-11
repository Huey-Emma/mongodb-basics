class Movie {
  constructor(movie, year, rating) {
    this._movie = movie;
    this._year = year;
    this._rating = rating;
    this._createdAt = new Date();
  }
}

module.exports = {
  Movie,
};
