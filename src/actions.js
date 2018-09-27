import { actionTypes } from '../constants';

export const addArticle = article => ({ type: actionTypes.ADD_ARTICLE, payload: article});