import * as actionTypes from "../actions/actionTypes";

export interface IActionBase {
  type: string;
  [prop: string]: any;
}

const initState = {
  games: [],
  filteredGames: [],
  search: "",
};

export default function (state = initState, action: IActionBase) {
  switch (action.type) {
    case actionTypes.GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case actionTypes.SEARCH_GAMES:
      return {
        ...state,
        search: action.payload.search,
      };
    case actionTypes.FILTER_GAMES:
      return {
        ...state,
        filteredGames: action.payload.filteredGames,
      };
    default: {
      return state;
    }
  }
}
