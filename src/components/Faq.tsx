import "../css/Faq.css";
import "../css/block.css";

const Faq: React.FC = () => {
  return (
    <div className="faq" id="faq">
      <ul className="faq__list">
        <li className="faq__block block block_pink">
          <h3 className="faq__question">Why should I choose Change.it?</h3>
          <p className="faq__answer">
            We strive to provide the very best in automation, coupled with a
            personal, human touch. Profiles are usually populated within 60
            seconds of checkout.
          </p>
        </li>
        <li className="faq__block block block_lime">
          <h3 className="faq__question">
            Will my name change instantly after using this service?
          </h3>
          <p className="faq__answer">
            No. We can only advise you on how to change your name and equip you
            with the tools required to go about it.
          </p>
        </li>
        <li className="faq__block block block_white">
          <h3 className="faq__question">
            What kind of companies do I need to notify?
          </h3>
          <p className="faq__answer">
            As well as helping you through the process of how to change your
            name, NameSwitch makes it easier to identify which organisations and
            companies you’ll need to notify about your impending name change.
          </p>
        </li>
        <li className="faq__block block block_blue">
          <a href="#" className="faq__ask">
            Ask a Question
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Faq;
