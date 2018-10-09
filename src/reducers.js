import {actionTypes} from './constants';

const initialState = {
  listings: [],
  searchOptions: {
    category: 'aap',
    postal: '02370',
    searchDistance: '5',
    keywords: '',
    minBedrooms: '1',
    maxBedrooms: '2',
    minSqft: '600',
    maxSqft: '800'
  },
  pagination: {
    start: 0,
    end: 30,
    increment: 30
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {
        ...state,
        listings: action.listings
      };
    case actionTypes.SET_SEARCH_OPTION:
      return {
        ...state,
        searchOptions: {
          ...state.searchOptions,
          [action.key]: action.value
        }
      };
    case actionTypes.UPDATE_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          start: action.start,
          end: action.end
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
