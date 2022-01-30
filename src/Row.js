import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";

import { API_KEY } from "./Requests";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            axios
                .get(
                    `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${API_KEY}&append_to_response=videos&include_adult=false`
                )
                .then((response) => {
                    const ytbKey = response.data.videos.results[0].key;
                    console.log(ytbKey);
                    setTrailerUrl(ytbKey);
                })
                .catch((error) => alert("there is no trailer for this movie"));
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row_poster ${
                                    isLargeRow && "row_posterLarge"
                                }`}
                                key={movie.id}
                                src={`${base_url}${
                                    isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt={movie.name}
                                onClick={() => handleClick(movie)}
                            />
                        )
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
