import "../css/Reviews.css";

const Reviews: React.FC = () => {
  return (
    <div className="reviews" id="reviews">
      <ul className="review__list_column">
        <li className="review__item block block_lime">
          <div className="review__user">
            <span className="review__user-name">Cody Fisher</span>
            <span className="review__user-location">South Dakota</span>
          </div>
          <p className="review__text">
            Fantastic service and great value for money!
          </p>
        </li>
        <li className="review__item block block_white">
          <div className="review__user">
            <span className="review__user-name">Theresa Webb</span>
            <span className="review__user-location">Greece</span>
          </div>
          <p className="review__text">
            Would definitely recommend to anyone looking for an efficient
            service.
          </p>
        </li>
      </ul>
      <ul className="review__list_column">
        <li className="review__item block block_pink">
          <div className="review__user">
            <span className="review__user-name">Eleanor Pena</span>
            <span className="review__user-location">Guinea</span>
          </div>
          <p className="review__text">
            Thank you so much for taking the time to share your experience with
            others.
            <br />
            So pleased you found the service helpful. Wishing you all the best
            in your next chapter!
          </p>
        </li>
        <li className="review__item block block_lime">
          <div className="review__user">
            <span className="review__user-name">Esther Howard</span>
            <span className="review__user-location">Iceland</span>
          </div>
          <p className="review__text">Well explained and a fast delivery :)</p>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
