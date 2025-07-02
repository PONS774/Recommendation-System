#  Movie Recommendation System

This is a content-based movie recommendation system built with Python and JavaScript. It suggests movies similar to a selected movie based on genre, overview, cast, and crew data.

## Overview 
1. The web app is built using React.js for the front-end and Python's Flask for the back-end.
2. It enables users to search and go through various details (like cast, genre, trailer, etc) of 5000+ movies (all these details are fetched using an API by TMDB).
3. Based on the searched movie, users are recommended movies which are fetched from the Python-Flask backend that uses a local dataset and content-based filtering algorithm.
4. The web-app also allows users to get top movies filtered by genre (also fetched using the TMDB API).
5. The web app is responsive and can be used on mobile devices.

![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg) ![Website shields.io](https://img.shields.io/badge/website-up-yellow)

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (Flask)
- **Data Processing:** Pandas, Scikit-learn
- **Deployment:** Render / Heroku

---

## Installation 
1. Clone or download this repository to your local machine.
2. Install all the libraries mentioned in the [requirements.txt]:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the Flask server:
    ```bash
    python app.py
    ```
4. Go to the `movie-recommender-app` directory and install the Node modules:
    ```bash
    cd movie-recommender-app
    npm install
    ```
5. In `package.json`, update the `proxy` field to match your Flask backend (e.g. `http://localhost:5000`).
6. Build the project:
    ```bash
    npm run build
    ```
7. Or to run in development:
    ```bash
    npm start
    ```

---

## Architecture 📄

![Architecture](https://user-images.githubusercontent.com/74367889/170507933-fabe5dcc-52a0-476f-8650-c454a433bc48.png)

---

## Algorithm For Recommendation

Recommendations are made using cosine similarity. For each movie, tags are created by combining various details like genre, title, top cast, and director. These tags are vectorized to build a similarity matrix. For any searched movie, the most similar ones are recommended.

### Cosine Similarity

![Cosine Similarity](https://user-images.githubusercontent.com/74367889/170820479-843243b2-3659-4101-8adf-2e5c7cdbcc19.png)

---

## References

1. [TMDB API](https://www.themoviedb.org/documentation/api)
2. [Cosine Similarity](https://www.machinelearningplus.com/nlp/cosine-similarity/)

---
## Screenshot

![Home Page](./Screenshots/Home%20page.png)


---

## Author

**PONVISHNU S**  
[LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/PONS774)

---

## License

This project is for educational purposes only.
