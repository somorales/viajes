import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

function FavCard(props) {
  const { eachFav, favs, setFavs } = props;

  const [isFlipped, setIsFlippled] = useState(false);

  function flipCard() {
    setIsFlippled(!isFlipped);
  }

  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div onClick={flipCard} key={eachFav} className="postcard">
          <h3>{eachFav.title}</h3>
          <div className="postcard-image">
            <img src={eachFav.image} alt={eachFav.title} />
          </div>
          <p>From: {eachFav.usuario}</p>
        </div>

        <div onClick={flipCard} key={eachFav} className="postcard-back">
          <div className="postcard-content">
            <div className="postcard-left">
              <p>
                {new Intl.DateTimeFormat("es-ES").format(
                  Date.parse(eachFav.date)
                )}
              </p>
              <p>{eachFav.description}</p>
            </div>
            <div className="postcard-right">
              <div className="stamps">
                <img src={eachFav.stamp} />
              </div>
              <div className="postcard-tags">
                <p>{eachFav.title}</p>
                <p>{eachFav.companion}</p>
                <p>{eachFav.category}</p>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
}

export default FavCard;
