import "../css/PromoText.css";
import "../css/block.css";

const textArray = [
  "We strive to provide the very best in ",
  "automation",
  ",",
  " coupled with a personal, human touch.",
];

const PromoTextSecond: React.FC = () => {
  return (
    <div className="promo-text">
      <span className="promo-text_white">
        {textArray[0]}
        <span className="promo-text_lime">{textArray[1]}</span>
        {textArray[2]}
        <span className="promo-text_grey">{textArray[3]}</span>
      </span>
    </div>
  );
};

export default PromoTextSecond;
