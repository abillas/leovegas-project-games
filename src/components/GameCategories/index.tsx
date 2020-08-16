import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoriesSelector } from "../../utils";

export const GameCategories = (props: any) => {
  const categories = Array.from(
    new Set(
      useSelector((state: any) => categoriesSelector(state.myGames.games))
    )
  );

  return (
    <React.Fragment>
      <div className="navigation__holder">
        <nav className="navigation navigation--categories">
          {categories.length ? (
            <ul className="navigation__items">
              <li className="navigation__item">
                <Link
                  className="navigation__link navigation__link--active"
                  aria-current="page"
                  to={`/`}
                >
                  All Games
                </Link>
              </li>
              {categories.map((element: any, key) => {
                return (
                  <li key={key} className="navigation__item">
                    <Link
                      className="navigation__link navigation__link--active"
                      aria-current="page"
                      to={`/games/${element.replace(/\s/g, "-")}`}
                    >
                      {element}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </nav>
      </div>
    </React.Fragment>
  );
};
