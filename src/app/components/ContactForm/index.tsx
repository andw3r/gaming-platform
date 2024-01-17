"use client";

import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="pb-20 sm:pb-[100px] md:pb-[120px] lg:pb-[160px]">
      <div className="container">
        <div className="mb-8 sm:mb-10 lg:mb-16">
          <h5 className="text-3xl font-semibold leading-[56.25px] mb-4 lg:mb-8">
            Lorem Ipsum
          </h5>
          <p className="leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 bg-[#1C140F] rounded-[15px] px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-2.5">
              Stay in the loop
            </h2>
            <p>
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex w-full lg:w-auto justify-between lg:items-center bg-white rounded-lg py-1.5 pr-1.5 pl-1.5 sm:pl-5"
          >
            <input
              placeholder="Enter email address"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="outline-none w-8/12 sm:w-auto placeholder:text-zinc-500 placeholder:text-[13px] placeholder:font-light text-zinc-800"
            />

            <button
              type="submit"
              className="bg-activeLink rounded-lg text-[13px] pl-1 sm:pl-5 pr-1 sm:pr-2 py-2"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
