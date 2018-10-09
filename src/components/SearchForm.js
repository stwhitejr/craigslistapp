import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => (
  <div className="card card-body mb-3 mt-3">
    <form className="d-flex flex-wrap" onSubmit={props.handleFormSubmit}>
      <div className="form-group col-lg-1 col-md-3">
        <label htmlFor="postal">Zip</label>
        <input
          type="number"
          className="form-control"
          id="postal"
          name="postal"
          onChange={props.handleInputChange}
          placeholder="Enter Zip Code"
          value={props.searchOptions.postal}
        />
      </div>
      <div className="form-group col-lg-1 col-md-3">
        <label htmlFor="searchDistance">Distance</label>
        <input
          type="number"
          className="form-control"
          id="searchDistance"
          name="searchDistance"
          value={props.searchOptions.searchDistance}
          onChange={props.handleInputChange}
          placeholder="Enter mileage from zip"
        />
      </div>
      <div className="form-group col-lg-2 col-md-3">
        <label htmlFor="minBedrooms">Bedrooms</label>
        <div className="d-flex align-items-center">
          <input
            type="number"
            className="form-control col-6"
            id="minBedrooms"
            name="minBedrooms"
            value={props.searchOptions.minBedrooms}
            onChange={props.handleInputChange}
          />
          <div>-</div>
          <input
            type="number"
            className="form-control col-6"
            id="maxBedrooms"
            name="maxBedrooms"
            value={props.searchOptions.maxBedrooms}
            onChange={props.handleInputChange}
          />
        </div>
      </div>
      <div className="form-group col-lg-2 col-md-3">
        <label htmlFor="minSqft">Sqft</label>
        <div className="d-flex align-items-center">
          <input
            type="number"
            className="form-control col-6"
            step="50"
            id="minSqft"
            name="minSqft"
            value={props.searchOptions.minSqft}
            onChange={props.handleInputChange}
          />
          <div>-</div>
          <input
            type="number"
            className="form-control col-6"
            step="50"
            id="maxSqft"
            name="maxSqft"
            value={props.searchOptions.maxSqft}
            onChange={props.handleInputChange}
          />
        </div>
      </div>
      <div className="form-group col-lg-6 col-md-12">
        <label htmlFor="keywords">Keywords</label>
        <div className="d-flex no-gutters">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              id="keywords"
              name="keywords"
              value={props.searchOptions.keywords}
              onChange={props.handleInputChange}
              placeholder="Enter keywords"
            />
          </div>
          <div className="col-2 ml-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

SearchForm.propTypes = {
  searchOptions: PropTypes.shape({
    category: PropTypes.string.isRequired,
    postal: PropTypes.string.isRequired,
    searchDistance: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchForm;
