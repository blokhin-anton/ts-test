import { combineReducers } from 'redux';
import newsReducer from 'src/store/reducers/news/reducer'

export default combineReducers<IGlobalStore>(
  { 
    newsReducer
  }
);

export interface IGlobalStore { }

