import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Vous souhaitez plus{" "}
          <span className="text-purple">d&apos;informations </span> ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès aujourd&apos;hui pour discuter de comment je peux
          contribuer à vos projets et développer mes compétences à vos côtés.
        </p>
        <a href="mailto:yanischena21@gmail.com">
          <MagicButton
            title="me contacter"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Yanis Chena
        </p>
      </div>
    </footer>
  );
};

export default Footer;
