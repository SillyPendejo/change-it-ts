import "../css/Header.css";

const Header: React.FC = () => {
  const linkNames = [
    "Overview",
    "How it works",
    "Reviews",
    "Blog",
    "Checklist",
  ];
  const linkList = linkNames.map((name) => (
    <li
      className="header__nav-item"
      key={(name === "How it works" ? "faq" : name).toLowerCase()}
    >
      <a
        className="header__nav-link"
        href={"#" + (name === "How it works" ? "faq" : name).toLowerCase()}
      >
        {name}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <div className="header__top">
        <div className="logo">
          Change<span className="logo__bordered">.it</span>
        </div>
        <div className="header__nav">
          <div className="nav-button">Navigation</div>
          <ul className="header__nav-list">{linkList}</ul>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__text_big">Change your</div>
        <div className="header__text_big header__text_left">name </div>
        <br />
        <div className="header__text_big">quickly!</div>
        <div className="button">
          <a className="button__link" href="#">
            Get started now
          </a>
        </div>
      </div>
      <p className="header__bottom_text">
        Starting a new chapter in your life should be a time of excitement and
        fresh beginnings.
      </p>
    </header>
  );
};

export default Header;
