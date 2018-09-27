import { actionTypes } from "./constants";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      state.articles.push(action.payload);
      return {
        ...state,
        articles: [
          ...state.articles,
          action.payload
        ]
      };
    default:
      return state;
  }
};

export default rootReducer;