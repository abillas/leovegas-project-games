import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { filterGames, getGames } from "../../actions/actions";
import { handleRouteChange, IGame, searchOnDisplayed } from "../../utils";

import { GameSearch } from "../GameSearch";
import { GameCategories } from "../GameCategories";
import { Game } from "../Game";

export const GamesList = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  let allGames = useSelector((state: any) => state.myGames.games);
  const displayedGames = useSelector((state: any) =>
    searchOnDisplayed(state.myGames.filteredGames, state.myGames.search)
  );

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterGames(handleRouteChange(location.pathname, allGames)));
  }, [dispatch, allGames, location]);

  return (
    <React.Fragment>
      <GameSearch />
      <GameCategories />
      <div className="category-list">
        <span className="category-label">
          {location.pathname.split("/")[2] || "All-Games"}
        </span>
      </div>
      <div>
        <div className="cards">
          {displayedGames.map((game: IGame) => (
            <Game key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
