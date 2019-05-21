import IArticle from './Article';
import IAction from 'src/store/IAction';
import {actionTypes} from './actionTypes';

interface NewsStore {
  news: Array<IArticle>,
  filters: Array<string>
}

const initState = {
  news: Array(),
  filters: Array()
};

export default (state:NewsStore = initState, action: IAction) => {
  switch(action.type) {
    case actionTypes.CREATE:
    case actionTypes.UPDATE:
      state.news[action.payload.id] = action.payload;
      return {...state, news: state.news};
    case actionTypes.DELETE:
      return {...state, news: state.news.filter( filteNew => filteNew.id !== action.payload.id )};
    case actionTypes.ADD:
      
    default: 
      return state;
  }
}
