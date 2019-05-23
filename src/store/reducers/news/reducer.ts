import IArticle from './Article';
import IAction from 'src/store/IAction';
import {actionTypes} from './actionTypes';

interface INews {
  [index: number]: IArticle
}
interface NewsStore {
  news: Map<string, IArticle>,
  filters: Array<string>
}

const initState = {
  news: new Map,
  filters: Array()
};

export default (state:NewsStore = initState, action: IAction) => {
  switch(action.type) {
    case actionTypes.CREATE:
    case actionTypes.UPDATE:
      state.news.set(action.payload.id, action.payload)
      return {...state, news: state.news};
    case actionTypes.DELETE:
      return {...state, news: state.news.delete(action.payload.id)};
    case actionTypes.ADD:
      
    default: 
      return state;
  }
}
