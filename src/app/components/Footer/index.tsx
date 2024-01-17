import Image from "next/image";
import logo from "@/app/assets/img/logo.svg";
// icons
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const icons = [FaFacebookF, PiInstagramLogoLight, FaTwitter, FaLinkedinIn];

  return (
    <footer className="bg-zinc-950 pt-16 pb-8">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center sm:items-start">
          <Image src={logo} alt="logo" />
          <p className="mt-2 mb-4 md:mt-4 md:mb-6 text-center sm:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span className="mt-2">@Logo</span>
        </div>

        {/* About Us */}
        <div className="flex flex-col">
          <h6 className="text-white mb-3">About us</h6>
          <span>Zeux</span>
          <span>Portfolio</span>
          <span>Careers</span>
          <span>Contact us</span>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col">
          <h6 className="text-white mb-3">Contact us</h6>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span className="mt-2">+908 89097 890</span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-center items-end space-x-4 md:col-start-2 lg:col-auto">
          {icons.map((item, index) => {
            const Icon = icons[index];
            return (
              <a
                href="#"
                key={index}
                className="bg-slate-50 hover:bg-slate-200 duration-150 ease-in w-8 h-8 text-black flex justify-center items-center rounded-full cursor-pointer"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      <hr className="border-neutral-300 mt-8" />

      {/* Copyright */}
      <div className="text-[13px] leading-normal text-center pt-4">
        Copyright ® 2021 Lorem All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
