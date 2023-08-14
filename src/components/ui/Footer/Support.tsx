import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="mt-4 text-md">
      <Link to="/terms" className="text-black mx-2 block md:inline">
        Terms & Conditions
      </Link>
      <Link to="/privacy" className="text-black mx-2 block md:inline">
        Privacy Policy
      </Link>
      <Link to="/faqs" className="text-black mx-2 block md:inline">
        FAQs
      </Link>
      <Link to="/app-install" className="text-black mx-2 block md:inline">
        App Install
      </Link>
    </div>
  );
};

export default Support;
