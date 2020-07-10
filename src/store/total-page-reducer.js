function totalPageReducer(state, action) {
    switch(action.type){
        case "set-movie":
            return {...state, movie: action.page};
        case "set-tv":
            return {...state, tv: action.page};
        case "set-people":
            return {...state, people: action.page};
        default:
            return state;
    }
  }


  const initialTotalPage = {
      movie: null,
      tv: null,
      people: null
  }


  export {totalPageReducer, initialTotalPage};