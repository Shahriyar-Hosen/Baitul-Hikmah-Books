import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" width="150px" className="object-contain" />
    </Link>
  );
};

export default Logo;
