import React from "react";
import { useDispatch } from "react-redux";
import { searchGames } from "../../actions/actions";
import { debounce } from "../../utils";

export const GameSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    dispatch(debounce(searchGames(e.target.value), 500));
  };
  return (
    <React.Fragment>
      <div className="search">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search"
          autoComplete="off"
          className="search-input"
        />
      </div>
    </React.Fragment>
  );
};
