import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWMwMDc4Nzc4ZGVmZGU5N2I1Mjg3YmY3ZGJmNmZlNyIsIm5iZiI6MTc0MDc5MzYzMC42MzM5OTk4LCJzdWIiOiI2N2MyNjcxZTg4NjE1MjQwNDY1M2I5MGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VQ3BrSMLHHPDpAgzQ0juRmiY_1cAoixYLPZzUIo8nm4",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();

    cardsRef.current.scrollLeft += event.deltaY * 0.5;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((cards, index) => {
          return (
            <Link to={`/player/${cards.id}`} className="card" key={index}>
              <img
                src={
                  "https://image.tmdb.org/t/p/w500/" +
                  (cards.backdrop_path || cards.poster_path)
                }
                alt=""
              />

              <p>{cards.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
