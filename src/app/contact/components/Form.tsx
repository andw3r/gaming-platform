"use client";

const Form = () => {
  return (
    <section className="bg-[#1C140F] mb-16 sm:mb-[90px] md:mb-[120px] lg:mb-[150px]">
      <div className="container">
        <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-14 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h3 className="text-3xl leading-[56.85px]">Say hello</h3>
            <p className="text-[13px] leading-normal font-medium">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>

          <form className="max-w-[671px] flex flex-col mx-auto gap-3 md:gap-5">
            <div className="grid grid-cols-2 gap-3 md:gap-5 lg:gap-7 w-full">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-neutral-600 text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-white bg-opacity-5 rounded-[9px] border border-stone-300 border-opacity-40 p-2 w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-neutral-600 text-sm font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-white bg-opacity-5 rounded-[9px] border border-stone-300 border-opacity-40 p-2 w-full"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="text-neutral-600 text-sm font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-white bg-opacity-5 rounded-[9px] border border-stone-300 border-opacity-40 p-2 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-neutral-600 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                className="resize-none bg-white bg-opacity-5 rounded-[9px] border border-stone-300 border-opacity-40"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full sm:w-fit self-end justify-center bg-activeLink text-white px-9 md:px-12 py-2.5 rounded-[10px]"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
