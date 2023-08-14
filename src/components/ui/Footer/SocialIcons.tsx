import Icon from "../Common/Icon";
import { facebook, instagram, twitter } from "../../../assets/Social Icon";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a
        href="https://www.facebook.com/your-bookstore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={facebook} />
      </a>
      <a
        href="https://twitter.com/your-bookstore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={twitter} />
      </a>
      <a
        href="https://www.instagram.com/your-bookstore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon={instagram} />
      </a>
    </div>
  );
};

export default SocialIcons;
