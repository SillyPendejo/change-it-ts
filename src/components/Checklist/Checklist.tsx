import ChecklistForm from "./ChecklistForm";
import "../../css/Checklist.css";

const Checklist: React.FC = () => {
  return (
    <div className="checklist__container" id="checklist">
      <div className="checklist__ad block block_lime">
        Get your free Change.it checklist
      </div>
      <div className="checklist__form block block_white">
        <ChecklistForm />
      </div>
    </div>
  );
}

export default Checklist;
