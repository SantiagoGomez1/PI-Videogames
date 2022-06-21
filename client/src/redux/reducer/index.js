// import { DELETE_HOUSE } from "../actions";
import { GET_ALL_VIDEOGAMES } from "../actions/index";
import { GET_GENRES } from "../actions/index";
import { GET_BY_ID } from "../actions/index";

import { FILTER_BY_CREATED } from "../actions/index";
import { FILTER_BY_GENRE } from "../actions/index";

import { SORT_VIDEOGAME } from "../actions/index";
import { SORT_RATING } from "../actions/index";

const initialState = {
  games: [],
  copyGames: [],
  genres: [],
  game: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        games: action.payload,
        copyGames: action.payload,
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

    case FILTER_BY_GENRE:
      let allGames = state.copyGames
      let filterGames = action.payload === 'All' ? allGames : allGames.filter(g => g.Genres.includes(action.payload))
      return{
        ...state,
        games: filterGames,
      };

    case FILTER_BY_CREATED:
      let allsGames = state.copyGames
      let gameCreated = action.payload === 'Created' ? allsGames.filter(g=> typeof g.Id === 'string') : allsGames.filter(g=> typeof g.Id !== 'string')
      return{
         ...state,
        games: action.payload === 'All' ? allsGames : gameCreated
      };

    case SORT_VIDEOGAME:
      let sortArr = action.payload === 'ASC' ? state.games.sort((a,b) => {
        if(a.Name > b.Name){
          return 1;
          }
        if(b.Name > a.Name){
          return -1;
          }
        return 0
      }) :
      state.games.sort((a,b)=>{
        if(a.Name > b.Name){
          return -1;
          }
        if(b.Name > a.Name){
          return 1;
          }
        return 0
      })
      return {
        ...state,
        games: sortArr
      };

      case SORT_RATING:
        let sortRat = action.payload === 'High' ? state.games.sort((a,b) => {
          if(a.Rating > b.Rating){
            return 1;
            }
          if(b.Rating > a.Rating){
            return -1;
            }
          return 0
        }) :
        state.games.sort((a,b)=>{
          if(a.Rating > b.Rating){
            return -1;
            }
          if(b.Rating > a.Rating){
            return 1;
            }
          return 0
        })
        return {
          ...state,
          games: sortRat
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
