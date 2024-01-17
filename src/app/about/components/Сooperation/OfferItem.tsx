import clsx from "clsx";

const OfferItem = () => {
  return (
    <article className="bg-stone-900 rounded-[20px] shadow px-4 md:px-6 lg:px-9 py-6 sm:py-8 md:py-12 lg:py-16">
      <span className="bg-fuchsia-600 bg-opacity-10 rounded-lg py-1.5 pl-2.5 md:pl-[14px] pr-4 md:pr-[35px] leading-relaxed text-sm">
        Lorem ipsum
      </span>
      <h6 className="mt-3 md:mt-5 mb-2 md:mb-4 text-xl font-semibold leading-[37.50px]">
        Lorem Ipsum
      </h6>
      <p className="leading-relaxed text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s,
      </p>
    </article>
  );
};

export default OfferItem;
