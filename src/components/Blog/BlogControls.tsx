import React from "react";
import { type ControlsState } from "./Blog";

interface BlogControlsProps {
  controls: ControlsState;
  setControls: (value: React.SetStateAction<ControlsState>) => void;
}

const BlogControls: React.FC<BlogControlsProps> = (props) => {
  const { controls, setControls } = props;
  const handleFilter = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setControls((prevControls) => ({
      ...prevControls,
      filter: target.value,
    }));
  };

  const handleSortButton = () => {
    if (controls.isSortAbc || controls.isSortDate) {
      setControls((prevControls) => ({
        ...prevControls,
        isSortAbc: false,
        isSortDate: false,
        isReversed: false,
      }));
    }
  };

  const handleAbcButton = () => {
    if (controls.isSortAbc) {
      if (controls.isReversed) {
        setControls((prevControls) => ({
          ...prevControls,
          isReversed: false,
        }));
      } else {
        setControls((prevControls) => ({
          ...prevControls,
          isReversed: true,
        }));
      }
    } else {
      setControls((prevControls) => ({
        ...prevControls,
        isSortAbc: true,
        isSortDate: false,
        isReversed: false,
      }));
    }
  };

  const handleDateButton = () => {
    if (controls.isSortDate) {
      if (controls.isReversed) {
        setControls((prevControls) => ({
          ...prevControls,
          isReversed: false,
        }));
      } else {
        setControls((prevControls) => ({
          ...prevControls,
          isReversed: true,
        }));
      }
    } else {
      setControls((prevControls) => ({
        ...prevControls,
        isSortAbc: false,
        isSortDate: true,
        isReversed: false,
      }));
    }
  };

  const abcButtonStyle = {
    backgroundImage: `url('${
      controls.isReversed && controls.isSortAbc
        ? "../img/reversesort.png"
        : "../img/sort.png"
    }')`,
  };
  const dateButtonStyle = {
    backgroundImage: `url('${
      controls.isReversed && controls.isSortDate
        ? "../img/reversesort.png"
        : "../img/sort.png"
    }')`,
  };
  const sortButtonClasses =
    "blog__sort_button blog__sort_sortby " +
    (controls.isSortAbc || controls.isSortDate ? " blog__sort_button_on" : "");
  const abcButtonClasses =
    "blog__sort_button blog__sort_abc " +
    (controls.isSortAbc ? " blog__sort_button_on" : "");
  const dateButtonClasses =
    "blog__sort_button blog__sort_date " +
    (controls.isSortDate ? " blog__sort_button_on" : "");

  return (
    <div className="blog__controls_container block block_pink">
      <div className="blog__search_container">
        <label className="checklist__label" htmlFor="searchbar">
          search:
        </label>
        <input
          className="blog__searchbar checklist__input"
          type="text"
          value={controls.filter}
          onChange={handleFilter}
          id="searchbar"
        />
      </div>
      <div className="blog__button_container">
        <button className={sortButtonClasses} onClick={handleSortButton}>
          Sort by
        </button>
        <button
          className={abcButtonClasses}
          onClick={handleAbcButton}
          style={abcButtonStyle}
        >
          ABC
        </button>
        <button
          className={dateButtonClasses}
          onClick={handleDateButton}
          style={dateButtonStyle}
        >
          Date
        </button>
      </div>
    </div>
  );
};

export default BlogControls;
