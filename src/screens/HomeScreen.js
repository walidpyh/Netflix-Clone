import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />

            <Row
                title="Only on Netflix"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row
                title="TV Action & Adventure"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default HomeScreen;
