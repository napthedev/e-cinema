import { FaGithub } from "react-icons/fa";
import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="flex justify-between items-center h-12 mt-14 px-7 bg-dark-lighten">
      <p className="hidden md:block">Copyright NAPTheDev &copy; 2021</p>
      <p className="block md:hidden">NAPTheDev &copy;</p>
      <div className="flex items-center gap-3">
        <p className="hidden md:block">Contact me: </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/napthedev/e-cinema.git"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
