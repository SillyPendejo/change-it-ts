import "../css/Overview.css";

const Overview: React.FC = () => {
  return (
    <div className="overview" id="overview">
      <ul className="overview__list">
        <li className="overview__block block block_white">
          <h2 className="overview__title">The whole world!</h2>
          <p className="overview__description">
            We work all over the world, so it doesn't matter where you are.
          </p>
        </li>
        <li className="overview__block block block_white">
          <h2 className="overview__title">Privacy and data security!</h2>
          <p className="overview__description">
            Your data is encrypted and stored on a secure portal which only you
            can access.
          </p>
        </li>
        <li className="overview__block block block_white">
          <h2 className="overview__title">Fast and cheap!</h2>
          <p className="overview__description">
            Name change journey with us for as little as £45.95.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Overview;
