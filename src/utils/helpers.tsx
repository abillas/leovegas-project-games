import { IGame } from "./game.model";

export const handleRouteChange = (currentRoute: string, games: IGame[]) => {
  const route = currentRoute.split("/");
  if (route[2]) {
    const gameCategory = route[2].replace("-", " ");
    return games.filter((game) =>
      game.categories?.some((category) => gameCategory === category)
    );
  } else {
    return games;
  }
};

export const searchOnDisplayed = (games: any, value: string) => {
  if (value) {
    return games.filter((x: any) => {
      return x.gameName.toLowerCase().indexOf(value) !== -1;
    });
  } else {
    return games;
  }
};

export const categoriesSelector = (state: string[]) => {
  return state.reduce((acc: any, game: any) => {
    acc = [...(acc || []), ...game.categories];
    return acc;
  }, []);
};

export function debounce<F extends (...params: any[]) => void>(
  fn: F,
  delay: number
) {
  let timeoutID: any;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
  };
}
