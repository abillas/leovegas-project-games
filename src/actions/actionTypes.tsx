import { IGame } from "../utils/game.model";

export const GET_GAMES: string = "GET_games";
export const SEARCH_GAMES: string = "SEARCH_games";
export const FILTER_GAMES: string = "FILTER_games";

export interface GetGames {
  type: typeof GET_GAMES;
  payload: IGame[];
}
