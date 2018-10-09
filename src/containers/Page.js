import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {searchCraigslist, setSearchOption, updatePagination} from '../actions';
import SearchForm from '../components/SearchForm';
import Listings from '../components/Listings';
import Stats from '../components/Stats';

const mapStateToProps = state => {
  return {
    listings: state.listings,
    searchOptions: state.searchOptions,
    pagination: state.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchCraigslist: options => dispatch(searchCraigslist(options)),
    setSearchOption: (key, value) => dispatch(setSearchOption(key, value)),
    updatePagination: (start, end) => dispatch(updatePagination(start, end))
  };
};

class Page extends Component {
  componentDidMount() {
    if (this.props.listings.length === 0) {
      this.props.searchCraigslist(this.props.searchOptions);
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    return this.props.searchCraigslist(this.props.searchOptions);
  };

  handleInputChange = e =>
    this.props.setSearchOption(e.target.name, e.target.value);

  getPostTitleWords = () =>
    this.props.listings.reduce((arr, listing) => {
      const wordsInTitle = listing.title.split(' ');
      return arr.concat(wordsInTitle);
    }, []);

  getListingPrices = () =>
    [...this.props.listings]
      .sort((a, b) => {
        const aPrice = parseInt(a.price.substring(1), 10);
        const bPrice = parseInt(b.price.substring(1), 10);
        if (aPrice > bPrice) {
          return -1;
        } else if (aPrice < bPrice) {
          return 1;
        }
        return 0;
      })
      .reduce((arr, listing) => {
        arr.push(parseInt(listing.price.substring(1), 10));
        return arr;
      }, []);

  getAveragePrice = () =>
    this.props.listings.reduce((total, listing, i) => {
      const price = parseInt(listing.price.substring(1), 10);
      total += price;
      if (this.props.listings.length === i + 1) {
        return Math.floor(total / this.props.listings.length);
      } else {
        return total;
      }
    }, 10);

  render() {
    return (
      <div className="container-fluid">
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          searchOptions={this.props.searchOptions}
        />
        {this.props.listings.length > 0 && (
          <div className="d-lg-flex flex-row-reverse">
            <div className="col-lg-4 col-md-12 mb-md-3">
              <Stats
                averagePrice={this.getAveragePrice()}
                listingPrices={this.getListingPrices()}
                postTitleWords={this.getPostTitleWords()}
              />
            </div>
            <div className="col-lg-8 col-md-12">
              <Listings
                listings={this.props.listings}
                updatePagination={this.props.updatePagination}
                pagination={this.props.pagination}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
