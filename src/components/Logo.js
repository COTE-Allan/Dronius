import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link className="app-header-logo" to="/">
      <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1744 488.06"
      >
        <defs></defs>
        <text class="cls-1" transform="translate(350.75 397.78)">
          DRONIUS
        </text>
        <line class="cls-2" x1="387" y1="322.55" x2="107" y2="322.55" />
        <line class="cls-2" x1="119.5" y1="328.55" x2="119.5" y2="189.55" />
        <line class="cls-2" y1="189.55" x2="239" y2="189.55" />
        <line class="cls-2" x1="1357.01" y1="322.55" x2="1637.01" y2="322.55" />
        <line class="cls-2" x1="1624.51" y1="328.55" x2="1624.51" y2="189.55" />
        <line class="cls-2" x1="1505" y1="189.55" x2="1744" y2="189.55" />
      </svg>
    </Link>
  );
};

export default Logo;
