"use client";

// icons
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const icons = [FaFacebookF, PiInstagramLogoLight, FaTwitter, FaLinkedinIn];
  return (
    <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-[95px] xl:mb-[145px]">
      <div className="container">
        <div className="grid grid-cols-4 md:grid-cols-12 justify-stretch gap-5 md:gap-6">
          <div className="relative flex flex-col items-center md:items-start col-span-4 lg:col-span-3 md:pr-6 before:absolute before:content-[''] before:w-[1px] before:h-[100px] before:right-0 before:bg-white before:hidden md:before:block">
            <span className="">Follow us</span>

            <div className="flex space-x-4 mt-[18px]">
              {icons.map((item, index) => {
                const Icon = icons[index];
                return (
                  <a
                    href="#"
                    key={index}
                    className="bg-stone-950 hover:bg-stone-900 duration-150 ease-in w-8 h-8 text-white flex justify-center items-center rounded-full cursor-pointer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative col-span-4 flex items-center justify-center before:absolute before:content-[''] before:w-[1px] before:h-[100px] before:right-0 md:before:-right-4 lg:before:right-0 before:bg-white before:hidden md:before:block">
            <span>
              <FaPhoneVolume />
            </span>
            <span className="ml-6 text-xl font-light">+94 4444 5555 6</span>
          </div>

          <div className="col-span-4 lg:col-span-5 flex items-center justify-center">
            <span>
              <FaMapMarkerAlt />
            </span>
            <span className="ml-5 text-xl font-light">
              but also the leap into electronic typesetting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
