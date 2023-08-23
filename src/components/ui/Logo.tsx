import { memo } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Logo = memo(() => (
  <Link to="/">
    <img src={logo} alt="Logo" width="100px" className="object-contain" />
  </Link>
));

export default Logo;
