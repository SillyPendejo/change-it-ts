import "../css/Footer.css";

const Footer: React.FC = () => {
  const linkNames = ["Divorce", "Privacy", "Deed Poll Online", "Terms", "FAQ"];
  const linkList = linkNames.map((name) => (
    <li className="footer__link" key={name}>
      <a className="footer__link_real" href="#">
        {name}
      </a>
    </li>
  ));

  return (
    <footer className="footer block_pink">
      <div className="footer__newsletter">
        <label htmlFor="newsletter" className="footer__newsletter-label">
          Newsletter
        </label>
        <input
          type="email"
          id="newsletter"
          className="footer__newsletter-input"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          © 2022 Change.it Ltd. All Rights Reserved
        </div>
        <ul className="footer__link-list">{linkList}</ul>
      </div>
    </footer>
  );
};

export default Footer;
