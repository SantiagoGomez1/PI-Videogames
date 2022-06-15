// import { DELETE_HOUSE } from "../actions";
import { GET_GENRES } from "../actions/index";
import { GET_ALL_VIDEOGAMES } from "../actions/index";
import { GET_BY_ID } from "../actions/index";

const initialState = {
  games: [],
  genres: [],
  game: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        games: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case GET_BY_ID:
      return {
        ...state,
        game: action.payload,
      };

    //  case DELETE_HOUSE:
    //    return{
    //      ...state,
    //      houses: state.houses.filter( e => action.payload !== e.id )
    //    }

    default:
      return state;
  }
};

export default rootReducer;
