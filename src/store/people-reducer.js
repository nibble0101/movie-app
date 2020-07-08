const peopleReducer = (state, action) => {
    switch(action.type){
        case "set-page":
            return {...state, page: action.page};
        case "set-genre":
            return {...state, genre: action.genre};
        default:
            return state;
    }
}

const initialPeopleState = {
    page: 1,
    genre: 0
}



export {initialPeopleState, peopleReducer};