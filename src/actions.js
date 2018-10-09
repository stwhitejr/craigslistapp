import {actionTypes} from './constants';

const searchCraigslistAction = listings => {
  return {
    type: actionTypes.SEARCH,
    listings
  };
};

export const setSearchOption = (key, value) => {
  return {
    type: actionTypes.SET_SEARCH_OPTION,
    key,
    value
  };
};

export const updatePagination = (start, end) => {
  return {
    type: actionTypes.UPDATE_PAGINATION,
    start,
    end
  };
};

export const searchCraigslist = options => dispatch => {
  // Convert options object to query string
  const query = Object.keys(options)
    .map(option => `${option}=${options[option]}`)
    .join('&');
  return fetch(`/craigslist/search?${query}`)
    .then(response => response.json())
    .then(listings => {
      // Remove deplicate listings by checking for same titles
      const listingsReduced = listings.reduce((arr, listing) => {
        if (!arr.find(element => listing.title === element.title)) {
          arr.push(listing);
        }
        return arr;
      }, []);
      return dispatch(searchCraigslistAction(listingsReduced));
    });
};
