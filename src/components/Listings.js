import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Listings = props => {
  const getListings = () =>
    [...props.listings].splice(props.pagination.start, props.pagination.end);

  const pageForward = () => {
    const listingStart = props.pagination.start + props.pagination.increment;
    const listingEnd = props.pagination.end + props.pagination.increment;
    props.updatePagination(listingStart, listingEnd);
  };

  const pageBack = () => {
    const listingStart = props.pagination.start - props.pagination.increment;
    const listingEnd = props.pagination.end - props.pagination.increment;
    props.updatePagination(listingStart, listingEnd);
  };

  const getListingRemainder = () =>
    props.pagination.end > props.listings.length
      ? props.listings.length
      : props.pagination.end;

  return (
    <div className="card card-body">
      <h6 className="card-title">
        {props.listings.length} Results | Showing {props.pagination.start + 1} -{' '}
        {getListingRemainder()}
      </h6>
      <div className="row mb-3">
        <div className="col-6">
          <button
            className="btn btn-primary"
            onClick={pageBack}
            disabled={props.pagination.start === 0}
          >
            <FontAwesomeIcon icon="arrow-left" />
          </button>
        </div>
        <div className="col-6 text-right">
          <button
            className="btn btn-primary"
            onClick={pageForward}
            disabled={props.pagination.end >= props.listings.length}
          >
            <FontAwesomeIcon icon="arrow-right" />
          </button>
        </div>
      </div>
      <div className="row">
        {getListings().map(listing => (
          <div className="col-lg-6 col-md-12 mb-3" key={listing.pid}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href={listing.url} target="_blank">
                    {listing.title}
                  </a>
                </h5>
                <p className="card-text">
                  {listing.date} <strong>{listing.price}</strong>
                </p>
                <div className="card-text">
                  <span className="badge badge-primary mr-2">
                    {listing.housing} {listing.area}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mb-3 mt-3">
        <div className="col-6">
          <button
            className="btn btn-primary"
            onClick={pageBack}
            disabled={props.pagination.start === 0}
          >
            <FontAwesomeIcon icon="arrow-left" />
          </button>
        </div>
        <div className="col-6 text-right">
          <button
            className="btn btn-primary"
            onClick={pageForward}
            disabled={props.pagination.end >= props.listings.length}
          >
            <FontAwesomeIcon icon="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

Listings.propTypes = {
  listings: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      hasPic: PropTypes.bool.isRequired,
      location: PropTypes.string.isRequired,
      pid: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      housing: PropTypes.string.isRequired
    })
  ).isRequired,
  updatePagination: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    increment: PropTypes.number.isRequired
  })
};

export default Listings;
