const displayReducer = (state, activeMenu) => {
  switch (activeMenu) {
    case "movies":
      return { movies: true, tv: false, people: false };
    case "tv":
      return { movies: false, tv: true, people: false };
    case "people":
      return { movies: false, tv: false, people: true };
    default:
      return state;
  }
};

const initialMenu = {
  movies: true,
  tv: false,
  people: false,
};

export {displayReducer, initialMenu};