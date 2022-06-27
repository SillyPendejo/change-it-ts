import "../css/Slogan.css";

const Slogan: React.FC = () => {
  return (
    <div className="slogan">
      <span className="slogan__first promo-text_white">Name сhange</span>
      <br />
      <span className="slogan__second promo-text_white">
        made<span className="slogan__third promo-text_lime"> easy</span>
      </span>
    </div>
  );
}

export default Slogan;
