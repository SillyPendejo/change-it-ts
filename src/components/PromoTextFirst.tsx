import "../css/PromoText.css";
import "../css/block.css";

const PromoTextFirst: React.FC = () => {
  const textArray = [
    "Change.It is an exciting online ",
    "name changing",
    " service ",
    " that simplifies the process of how to change your name.",
  ];

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

export default PromoTextFirst;
