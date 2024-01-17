"use client";

interface ColTextProps {
  title: string;
  text: string;
  subtext: string;
  button: string;
}

const ColText = ({ title, text, subtext, button }: ColTextProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-medium mb-7 md:mb-11">{title}</h3>
      <div className="text-[17px] mb-8 md:mb-[46px]">
        <p className="mb-[18px]">{text}</p>
        <p className="">{subtext}</p>
      </div>
      <button className="flex w-fit bg-activeLink px-11 py-3">{button}</button>
    </div>
  );
};

export default ColText;
