import axios from "axios";
import * as actionTypes from "./actionTypes";
import { Dispatch } from "redux";

import { IGame } from "../utils/game.model";
import * as config from "../config.json";

export const getGames = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(config.API_BASE);

    dispatch({
      type: actionTypes.GET_GAMES,
      payload: res.data as IGame[],
    });
  } catch (error) {
    alert(error);
  }
};

export const searchGames = (search: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: actionTypes.SEARCH_GAMES,
      payload: {
        search: search,
      },
    });
  } catch (error) {
    alert(error);
  }
};

export const filterGames = (games: any[]) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: actionTypes.FILTER_GAMES,
      payload: {
        filteredGames: games,
      },
    });
  } catch (error) {
    alert(error);
  }
};
