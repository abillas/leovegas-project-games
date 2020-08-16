import React from "react";
import { IGame } from "../../utils/game.model";

export const Game = (props: any) => {
  const { game }: IGame = props;

  return (
    <React.Fragment>
      <a
        style={{ textDecoration: "none" }}
        href={
          !props.isMobile
            ? game.gamePreviewUrl
            : game.gamePreviewUrlMobile || game.gamePreviewUrl
        }
      >
        <div className="card" key={game.slug}>
          <img
            className="card-image"
            src={"https://" + game.gameThumbnail}
            alt={game.slug}
          />
          <div className="card-info">{game.gameName}</div>
        </div>
      </a>
    </React.Fragment>
  );
};
