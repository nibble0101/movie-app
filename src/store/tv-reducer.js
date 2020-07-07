const tvReducer = (state, action) => {
    switch(action.type){
        case "set-page":
            return {...state, page: action.page};
        case "set-genre":
            return {...state, genre: action.genre};
        default:
            return state;
    }
}

const initialTvState = {
    page: 1,
    genre: null
}



export {initialTvState, tvReducer};