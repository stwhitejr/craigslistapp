import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const WordItem = props => (
  <Fragment>
    {(props.count > 25 && (
      <h1>
        <span className="badge badge-primary">{props.word}</span>
      </h1>
    )) ||
      (props.count > 15 && (
        <h2>
          <span className="badge badge-primary">{props.word}</span>
        </h2>
      )) ||
      (props.count > 10 && (
        <h3>
          <span className="badge badge-primary">{props.word}</span>
        </h3>
      )) ||
      (props.count > 6 && (
        <h4>
          <span className="badge badge-secondary">{props.word}</span>
        </h4>
      )) ||
      (props.count > 4 && (
        <h5>
          <span className="badge badge-secondary">{props.word}</span>
        </h5>
      )) ||
      (props.count > 1 && (
        <h6>
          <span className="badge badge-secondary">{props.word}</span>
        </h6>
      ))}
  </Fragment>
);

WordItem.propTypes = {
  word: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

const Stats = props => {
  const highestPrice = props.listingPrices[0];
  const lowestPrice = props.listingPrices[props.listingPrices.length - 1];
  const wordCount = props.postTitleWords.reduce((obj, title) => {
    let count = 0;
    props.postTitleWords.forEach(titleToCount => {
      if (titleToCount === title) {
        count++;
      }
    });
    obj[title] = count;
    return obj;
  }, {});
  const wordCountSorted = Object.keys(wordCount).sort((a, b) => {
    if (wordCount[a] > wordCount[b]) {
      return -1;
    } else if (wordCount[a] < wordCount[b]) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="card card-body">
      <h6 className="card-title">Stats</h6>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Average Price
          <span className="badge badge-primary badge-pill">
            {props.averagePrice}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Highest Price
          <span className="badge badge-primary badge-pill">{highestPrice}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lowest Price
          <span className="badge badge-primary badge-pill">{lowestPrice}</span>
        </li>
      </ul>
      <div className="mt-4">
        <h6 className="card-title">Common Words</h6>
        <div className="d-flex flex-wrap">
          {wordCountSorted.map(word => {
            if (wordCount[word] > 1) {
              return (
                <div className="mr-2" key={word}>
                  <WordItem word={word} count={wordCount[word]} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  averagePrice: PropTypes.number.isRequired,
  listingPrices: PropTypes.array.isRequired,
  postTitleWords: PropTypes.array.isRequired
};

export default Stats;
