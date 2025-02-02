import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { MdContactMail } from "react-icons/md";
// import img from "../../../public/s.png"
const Footer = () => {
  return (
    <div className="mt-[100px]">
      <hr />
      <footer className="flex justify-between text-left py-4 gap-10 md:p-10 ">
        <div>
          <p className="text-2xl ">Sayeed</p>
          <p className="pt-6 pb-2 text-xl">Md. Abu Sayeed Ifty</p>
          <p className="text-sm md:text-base">MERN-Stack-Entwickler</p>
        </div>
        <div>
          <span className="text-xl font-bold">Sozial</span>
          <div className="grid grid-flow-col gap-4 mt-6">
            <a href="https://github.com/Sayeedifty1">
              {" "}
              <BsGithub className="mb-6 text-xl hover:text-violet-500"></BsGithub>{" "}
            </a>
            <a href="https://www.linkedin.com/in/md-abu-sayeed-ifty-8b047b1a6/">
              <ImLinkedin className="mb-6 text-xl hover:text-blue-500"></ImLinkedin>
            </a>
            <a href="https://www.facebook.com/sayeed.ifty/">
              <BsFacebook className="mb-6 text-xl hover:text-blue-600"></BsFacebook>
            </a>
            <a href="">
              <MdContactMail className="mb-6 text-xl hover:text-red-500"></MdContactMail>
            </a>
          </div>
        </div>
      </footer>
      <hr />
      <footer className="footer footer-center py-4 ">
        <div className="text-center">
          <p>Copyright © 2024 - Alle Rechte vorbehalten von Md. Abu Sayeed</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
